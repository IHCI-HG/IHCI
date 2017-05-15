// We only need to import the modules necessary for initial render

import CoreLayout from '../components/CoreLayout'
import NotFind from '../components/404-not-find'
import Home from '../containers/Home'
import {
    counter,
    about,
    todolist,
    // demo1,
    // demo2
} from './demoCompoant'
import { user, signUp } from './user'
import Blog from '../containers/Blog'
<<<<<<< Updated upstream
import { resume } from './resume'
=======
import counter1 from '../containers/demoCompoant/demo1/index.js'
>>>>>>> Stashed changes

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
        //demoCompoant
        //couter为原生的，Facebook官方脚手架的组件
        counter(store),
        about(store),
        todolist(store),
        user(store),
        signUp(store),

        resume(store),
        // { path: '/signUp', component: signUp },
        { path: '/blog', component: Blog },
        {
            path: 'demo',
            component: counter1,
            childRoutes: [
                { path: 'blog', component: counter1 },
            ]
        },
        //   CounterRoute(store),
        //   demoCompoant(store),
        //   {
        //     path        : '/signUp',
        //     component   : SignUpRoute
        //   },
        //   UserRoute(store)
        {
            path: '*',
            component: NotFind
        },
    ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
