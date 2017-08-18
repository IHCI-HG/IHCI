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

 export const teamMember = (store) => ({
     path: 'teamMember',
     getComponent(nextState, cb) {
         require.ensure([], (require) => {
             const component = require('../containers/team/teamMember').default
             cb(null, component) 
         }, 'team')
     }
 });
