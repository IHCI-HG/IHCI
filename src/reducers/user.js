import { LOGIN, SINGOUT, CHEAK_IF_LOGIN, IS_LOGINED, NO_LOGINED } from '../actions/user';

const initeState = {
    userId: null,
    isLogin: false,
    user: null,
    password: null
}

export default function headerReducer(state = initeState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                isLogin: true,
                user: action.user,
                password: action.password
            }
        case SINGOUT:
            return {
                isLogin: false,
                user: null,
                password: null
            }
        case IS_LOGINED:
            return {
                isLogin: true,
                user: action.user,
            }
        case NO_LOGINED:
            return {
                isLogin: false,
            }
        default:
            return state
    }
}
