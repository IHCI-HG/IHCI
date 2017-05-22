import { injectReducer } from '../reducers'
import ProjectList from '../containers/project/project-list'

export const project = (store) => ({
    path: 'project',
    getComponent( nextState, cb) {
        require.ensure( [], (require) => {
            const component = require('../containers/project').default
            const reducer = require('../reducers/project').default
            injectReducer(store, { key: 'project', reducer })
            cb(null, component)
        }, 'project')
    },

    indexRoute: { component: ProjectList },
    childRoutes: [
        projectList(store),
        myProject(store),
        createProject(store),
        projectDetail(store),
    ]
});


export const projectList = (store) => ({
    path: 'project-list',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/project/project-list').default
            cb(null, component) 
        }, 'project')
    }
});

export const myProject = (store) => ({
    path: 'my-project',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/project/my-project').default
            cb(null, component)
        }, 'project')
    }
})

export const createProject = (store) => ({
    path: 'create-project',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/project/create-project').default
            cb(null, component) 
        }, 'project')
    }
})

export const projectDetail = (store) => ({
    path: 'project-detail',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/project/project-detail').default
            cb(null, component)
        }, 'project')
    }
})
