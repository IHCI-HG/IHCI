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

export const createTeam = (store) => ({
    path: 'createTeam',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/team/createTeam').default
            cb(null, component) 
        }, 'team')
    }
});