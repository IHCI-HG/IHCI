import { combineReducers } from 'redux'
import locationReducer from './location'
import userReducer from './user.js'

//初始化的时候的公用reducer
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    user: userReducer,
    ...asyncReducers
  })
}

// 异步加载模块的时候单独把这个模块的reducer动态注入到store当中
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
