/**
 * Created by luqianyu on 2016/12/27.
 */
export const ABOUT_NUMBER_INCREMENT = 'ABOUT_NUMBER_INCREMENT'
export const ABOUT_ADD_STR = 'ABOUT_ADD_STR'
export const ABOUT_INIT = 'ABOUT_INIT'

// ------------------------------------
// Actions
// ------------------------------------
export function increNumber (value = 1) {
  return {
    type: ABOUT_NUMBER_INCREMENT,
    num: value
  }
}

export function addStr (str = 'default') {
  return {
    type: ABOUT_ADD_STR,
    str: str
  }
}

export const async = (value = 2) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch({
        type : ABOUT_NUMBER_INCREMENT,
        num: value
      })
      resolve()
    })
  }
}

export const inite = (number = 0, str = 'default') => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch({
        type : ABOUT_INIT,
        str: str,
        number: number
      })
      resolve()
    })
  }
}

export const actions = {
  increNumber,
  addStr,
  async,
  inite
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  number: 0,
  str: ''
}

export default function aboutReducer (state = initialState, action) {
  switch (action.type) {
    case 'ABOUT_NUMBER_INCREMENT':
      return {
        number: state.number + action.num,
        str: state.str
      }
    case 'ABOUT_ADD_STR':
      return {
        number: state.number,
        str: state.str + action.str
      }
    case 'ABOUT_INIT':
      return {
        number: action.number,
        str: action.str
      }
    default:
      return state
  }
}
