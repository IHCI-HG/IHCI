import {
    LOGIN,
    SINGOUT,
    CHEAK_IF_LOGIN,
    IS_LOGINED,
    NO_LOGINED,

} from '../actions/user';

const initeState = {
    userId: null,
    isLogin: false,
    user: null,
    password: null,
    wechat: null,
    hasResume: false,
}

export default function headerReducer(state = initeState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                user: action.user,
                password: action.password,
            }
        case SINGOUT:
            return {
                ...state,
                isLogin: false,
                user: null,
                password: null,
            }
        case IS_LOGINED:
            return {
                ...state,
                isLogin: true,
                user: action.user,
            }
        case NO_LOGINED:
            return {
                ...state,
                isLogin: false,
            }
        default:
            return state
    }
}
