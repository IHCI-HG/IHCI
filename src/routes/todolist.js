import { injectReducer } from '../reducers'

export const todolist = (store) => ({
  path : 'todolist',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const User = require('../containers/TodoList/containers/TodoListContainer').default
      const reducer = require('../containers/TodoList/modules/todolist').default
      injectReducer(store, { key: 'todolist', reducer })
      cb(null, User)
    }, 'user')
  }
})
