import { injectReducer } from '../reducers'

export const project = (store) => ({
    path: 'project',
    getComponent( nextState, cb) {
        require.ensure( [], (require) => {
            console.log('project1')
            const component = require('../containers/project').default
            const reducer = require('../reducers/project').default
            injectReducer(store, { key: 'project', reducer })
            cb(null, component)
        }, 'project')
    },

    childRoutes: [
        
    ]
});
