import { newApi, getApi, setLocalStorage, clearLocalStorage } from './common.js'
import $ from 'jquery'
import { browserHistory } from 'react-router'

import { getTeamlist } from '../reducers/team'

export function getTestTeamData(userData1, userData2) {
    return async (dispatch, getStore) => {
        const result = await newApi({
            dispatch,
            getStore,
            url: '/api/project/team/testTeamData',
            method: 'GET',
            body: {
                userData1,
                userData2,
            }
        });

        const data = result.data
        if(result && result.code == 200) {
            dispatch(getTeamlist(data.teams, data.markedTeams, data.ownTeams))
        }
        if(result && result.code != 200) {
            console.err(result.msg);
        }

    };
}


export function postTestData(somePostData) {
    return async (dispatch, getStore) => {
        const result = await newApi({
            dispatch,
            getStore,
            url: '/api/project/team/postTestData',
            method: 'POST',
            body: {
                somePostData,
                xxxoo: {
                    xxx: "ssdsds",
                    awdawdwd: 22222,
                    wadawdawd: [1,2,3,4,5]
                },
            }
        });
        const data = result.data
        if(result && result.code == 200) {
            console.log(data);
        }
        if(result && result.code != 200) {
            console.err(result.msg);
        }
    };
}
