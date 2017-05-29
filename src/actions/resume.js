import { api } from './common.js'
import $ from 'jquery'


export const GET_RESUME = "GET_RESUME"

export function getResume(arg) {
    return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signout',
            method: 'GET'
        });

        dispatch({
            type: GET_RESUME,
            payload: {

            }
        })
    };
}
