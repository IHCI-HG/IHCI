import { api, getApi, setLocalStorage, clearLocalStorage } from './common.js'
export const LOGIN = 'LOGIN'
export const SINGOUT = 'SIGNOUT'
export const CHEAKING_IF_LOGIN = "CHEAKING_IF_LOGIN"
export const IS_LOGINED = "IS_LOGINED"
export const NO_LOGINED = "NO_LOGINED"
export const LOGIN_FAIL = 'LOGIN_FAIL'

import { message } from 'antd';
import $ from 'jquery'

// actions

export function cheakIfLogin() {
    return async (dispatch, getStore) => {
        dispatch({
            type: CHEAKING_IF_LOGIN,
        })
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signin',
        });

        result.text().then((text) => {
            if (text == 'sign first') {
                localStorage.clear()
                dispatch({
                    type: NO_LOGINED,
                })
                return false
            } else {
                dispatch({
                    type: IS_LOGINED,
                    user: text,
                })
                return true
            }
        })

    }
}

export function login(arg) {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signin',
            method: 'POST',
            body: {
                username: arg.username,
                password: arg.password,
            }
        });

        result.text().then((text) => {
            if (text == "sign failed, name or password error") {
                dispatch({
                    type: LOGIN_FAIL,
                })
                message.error("账号或密码错误")
                return false
            } else {
                dispatch({
                    type: LOGIN,
                    user: arg.username,
                })
            }
        })

    };
}

export function signOut(arg) {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signout',
            method: 'GET'
        });

        dispatch({
            type: SINGOUT,
        })
    };
}


//异步function

export function emailExist(email) {
    let getpromise = new Promise(
        (resove, reject)=>{
            $.ajax({
                method: 'get',
                // url: '/accountCheak.json?username=' + this.refs.username.value,
                url: '/api/project/user/isNameExit?username=' + email,
                // url: 'http://192.168.1.62:3000/api/project/user/isNameExit?name=' + this.refs.username.value
            }).then(function (data) {
                resove(data.exist)
            })
        }
    )
    return getpromise
}


export const actions = {
    cheakIfLogin,
    login,
    signOut
}

