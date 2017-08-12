import { injectReducer } from '../reducers'


export const teamList = (store) => ({
    path: 'teamList',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/team/teamList').default
            cb(null, component) 
        }, 'team')
    }
});
