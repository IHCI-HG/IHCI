import { injectReducer } from '../reducers'

export const createTeam = (store) => ({
  path : 'createTeam',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const component = require('../containers/Team/createTeam').default
      cb(null, component)
    }, 'createTeam')
  }
})