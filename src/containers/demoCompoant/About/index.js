/**
 * Created by luqianyu on 2016/12/25.
 */
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'about',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const About = require('./containers/AboutContainer').default
      const reducer = require('./modules/About').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'about', reducer })

      /*  Return getComponent   */
      cb(null, About)

      /* Webpack named bundle   */
    }, 'about')
  }
})
