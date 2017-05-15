import { injectReducer } from '../reducers'

// export const demo1 = (store) => ({
//   path : 'demoCompoant/demo1',
//   getComponent (nextState, cb) {
//     require.ensure([], (require) => {
//       const User = require('../containers/demoCompoant/demo1/containers/UserContainer').default
//       const reducer = require('../containers/demoCompoant/demo1/modules/UserModule').default
//       injectReducer(store, { key: 'demo1', reducer })
//       cb(null, User)
//     }, 'user')
//   }
// })

// export const demo2 = (store) => ({
//   path : 'demoCompoant/demo2',
//   getComponent (nextState, cb) {
//     require.ensure([], (require) => {
//       const User = require('../containers/demoCompoant/demo2/containers/UserContainer').default
//       const reducer = require('../containers/demoCompoant/demo2/modules/UserModule').default
//       injectReducer(store, { key: 'demo2', reducer })
//       cb(null, User)
//     }, 'user')
//   }
// })


//Facebook官方脚手架的示范demoCouter

export const counter = (store) => ({
  path : 'demoCompoant/counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('../containers/demoCompoant/Counter/containers/CounterContainer').default
      const reducer = require('../containers/demoCompoant/Counter/modules/counter').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })


      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'counter')
  }
})


export const about = (store) => ({
  path : 'demoCompoant/about',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const about = require('../containers/demoCompoant/About/containers/AboutContainer').default
      const reducer = require('../containers/demoCompoant/About/modules/About').default
      injectReducer(store, { key: 'about', reducer })
      cb(null, about)
    }, 'about')
  }
})


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



