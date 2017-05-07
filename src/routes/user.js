import { injectReducer } from '../reducers'

export const user = (store) => ({
  path : 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const component = require('../containers/User/user.js').default
      const reducer = require('../containers/User/user-reducer.js').default
      // injectReducer(store, { key: 'user', reducer })
      cb(null, component)
    }, 'user')
  }
})

