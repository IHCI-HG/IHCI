import { injectReducer } from '../reducers'
import baseInfo from '../containers/resume/base-info.js'

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

    indexRoute: { component: baseInfo },
    childRoutes: [
        resumeBase(store),
        resumeSelfIntro(store),
        resumeProduction(store),
        resumeSocialExp(store),
        resumeProjectExp(store),
        // { path: 'skill', component: Skill },
        // { path: 'self-intro', component: SelfIntro},
    ]

})



export const resumeBase = (store) =>  ({
    path: 'base-info',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume/base-info').default
            cb(null, component)
        }, 'resume')
    },
});


export const resumeSelfIntro = (store) => ({
    path: 'self-intro',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume/self-intro').default
            cb(null, component)
        }, 'resumeSelfIntro')
    }
})

export const resumeProduction = (store) => ({
    path: 'production',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume/production').default
            cb(null, component)
        }, 'resumeProduction')
    }
})

export const resumeSocialExp = (store) => ({
    path: 'social',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume/social-exp').default
            cb(null, component)
        }, 'resumeSocialExp')
    }
})

export const resumeProjectExp = (store) => ({
    path: 'project',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/resume/project-exp').default
            cb(null, component)
        }, 'resumeProjectExp')
    }
})
