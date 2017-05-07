import { LOGIN, SINGOUT } from '../actions/user';

const initeState = {
  userId: null,
  isLogin: false,
  user: null,
  password: null
}

export default function headerReducer (state = initeState, action) {
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
    default:
      return state
  }
}
