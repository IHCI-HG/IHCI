/**
 * Created by luqianyu on 2017/1/16.
 */
export const BINDING_WECHAT = 'BINDING_WECHAT'
export const UNBINDING_WECHAT = 'UNBINDING_WECHAT'

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export function bindWechat(wechatOpenId) {
  return {
    type: BINDING_WECHAT,
    wechat: wechatOpenId
  }
}

export function unbindWechat() {
  return {
    type: UNBINDING_WECHAT
  }
}

export const actions = {
  bindWechat,
  unbindWechat
}


const initialState = {
  // wechat: localStorage.wechat,
  // account: localStorage.userName
}

export default function userReducer (state = initialState, action) {
  switch(action.type) {
    // case BINDING_WECHAT :
    //   return {
    //     wechat: action.wechat,
    //     user: localStorage.isLogin
    //   }
    // case UNBINDING_WECHAT :
    //   return {
    //     wechat: "",
    //     user: localStorage.isLogin
    //   }
    default:
      return state
  }
}


