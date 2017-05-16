import { injectReducer } from '../reducers'

export const user = (store) => ({
  path : 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const component = require('../containers/User/user.js').default
      //   const reducer = require('../containers/User/user-reducer.js').default
      // injectReducer(store, { key: 'user', reducer })
      cb(null, component)
    }, 'user')
  }
})


export const signUp = (store) => ({
  path : 'SignUp',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const component = require('../containers/SignUp/newIndex').default
    //   const reducer = require('../containers/User/user-reducer.js').default
      // injectReducer(store, { key: 'user', reducer })
      cb(null, component)
    }, 'signUp')
  }
})


export const login = (store) => ({
    path: 'login',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/User/login').default
            cb(null, component)
        }, 'login')
    }
})
