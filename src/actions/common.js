import fetch from 'isomorphic-fetch';
import { encode } from 'querystring';


export function getApi(url) {
    fetch(url, {
        'Content-Type': 'application/json;charset=UTF-8',
        credentials: 'include',
    }).then((res) => {
        return res
    }).catch((err) => {
        console.error(err);
    })
}

//旧的api方法有问题，但是因为代码中已经有其他地方调用这个，所以新的API请求方法暂时叫newApi, 后面会调整回来
export function api({
    dispatch,
    getStore,
    url,
    method = 'GET',
    body = {},
}) {
    return new Promise((resolve, reject) => {
        url = method === 'GET' ? `${url}?${encode(body)}` : url;
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            credentials: 'include',
            body: method === 'POST' ? JSON.stringify(body) : null,
        })
            .then((json) => {
                resolve(json)
            })
            .then((res) => {
                return res
            })
            .catch((err) => {
                console.error(err);
            })
    });
}

// function encode(obj) {
//     var str = JSON.stringify(obj);

//     console.log(str);
//     return new Buffer(str).toString('base64');
// }

//用fetch对ajax请求进行封装，便于对接口进行统一管理
export function newApi({
    dispatch,
    getStore,
    url,
    method = 'GET',
    body = {},
}) {


    return new Promise((resolve, reject) => {
        url = method === 'GET' ? `${url}?${encode(body)}` : url;
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            credentials: 'include',
            body: method === 'POST' ? JSON.stringify(body) : null,
        })  .then((res) => res.json())
            .then((json) => {
                if (!json.code || !json.msg) {
                    console.error('错误的接口返回格式');
                }
                resolve(json)
            })
            .then((res) => {
                return res
            })
            .catch((err) => {
                console.error(err);
            })
    });
}

//localStorage 操作
//可能未来会增加认证操作，加密操作等等等等
//所以要封装起来，现在是简单的直接操作LocalStorage

export function setLocalStorage(arg) {
    Object.keys(arg).forEach((element) => {
        localStorage.setItem(element, arg[element]);
    })
}

export function clearLocalStorage() {
    localStorage.clear()
}

export function deletLocalStorageItem(arg) {
    Object.keys(arg).forEach((element) => {
        localStorage[element] = arg[element]
    })
}
