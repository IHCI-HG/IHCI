import { api, setLocalStorage, clearLocalStorage } from './common.js'
export const LOGIN = 'LOGIN'
export const SINGOUT = 'SIGNOUT'
export const CHEAK_IF_LOGIN = "CHEAK_IF_LOGIN"

// actions

export function cheakIfLogin() {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signin',
        });

        result.text().then((text)=>{
            if(text == 'sign first') {
                localStorage.clear()
                return false 
            } else {
                return true
            }
        })

        // dispatch({
        //     type: CHEAK_IF_LOGIN,
        // })
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
            if(text == "sign failed, name or password error") {
                alert("账号或密码错误")
                return false
            } else {
                dispatch({
                    type: LOGIN,
                    user: arg.username,
                    password: arg.password,
                })
                setLocalStorage(JSON.parse(text)[0])
            }
        })
 
        // if (result.text() === 'sign failed, name or password error') {
        // } else {
        //     dispatch({
        //         type: LOGIN,
        //         user: arg.username,
        //         password: arg.password,
        //     })

        //     saveLocalStorage(result.json()[0])
        // }
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

        clearLocalStorage()


    };
}

// export function login(user, password) {
//     return {
//         type: LOGIN,
//         user: user,
//         password: password
//     }
// }

// export function signOut() {
//     return {
//         type: SINGOUT
//     }
// }

export const actions = {
    cheakIfLogin,
    login,
    signOut
}

