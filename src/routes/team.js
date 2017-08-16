import { injectReducer } from '../reducers'
import { TeamList } from '../containers/team/teamList'

// export const team = (store) => ({
//     path: 'team',

//     getComponent( nextState, cb) {
//         require.ensure( [], (require) => {
//             const component = require('../containers/team').default
//             const reducer = require('../reducers/team').default
//             injectReducer(store, { key: 'team', reducer })
//             cb(null, component)
//         }, 'team')
//     },

//     indexRoute: { component: TeamList },
//     childRoutes: [
//         teamList(store),
//         // myProject(store),
//         // createProject(store),
//         // projectDetail(store),
//     ]
// });

export const teamList = (store) => ({
    path: 'teamList',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/team/teamList').default
            cb(null, component) 
        }, 'team')
    }
});

// export const createTeam = (store) => ({
//     path: 'createTeam',
//     getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//             const component = require('../containers/team/createTeam').default
//             cb(null, component) 
//         }, 'team')
//     }
// });
