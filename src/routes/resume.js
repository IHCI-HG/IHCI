import { injectReducer } from '../reducers'

export const resume = (store) => ({
    path: 'resume',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume').default
            const reducer = require('../reducers/resume').default
            injectReducer(store, { key: 'resume', reducer })
            cb(null, component)
        }, 'resume')
    },

  childRoutes: [
        resumeBase(store),
        // { path: 'skill', component: Skill },
        // { path: 'self-intro', component: SelfIntro},
    ]

})


export const resumeBase = (store) =>  ({
    path: 'base-info',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume/base-info.js').default
            cb(null, component)
        }, 'resume')
    },
});

