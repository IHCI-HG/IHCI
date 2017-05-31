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
import { user, signUp, login } from './user'
import Blog from '../containers/Blog'
import { resume } from './resume'
import { project } from './project'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
        counter(store),
        about(store),
        todolist(store),
        user(store),
        login(store),
        signUp(store),
        resume(store),
<<<<<<< HEAD
=======
        project(store),

>>>>>>> origin/master
        { path: '/blog', component: Blog },

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
