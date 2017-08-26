export const GET_TEAMLIST = 'GET_TEAMLIST'

const teamInitialState = {
   teams: [],
   markedTeams: [],
   ownTeams: [],
}

export function getTeamlist(teams, markedTeams, ownTeams){
    return  {
        type: GET_TEAMLIST,
        teams: teams,
        markedTeams: markedTeams,
        ownTeams: ownTeams
    }
};

// export function getTeamlist(){
//     return {
//         type: GET_TEAMLIST
//     }
// }

export const actions = {
    getTeamlist
};

const team = (state = teamInitialState, action) => {
    
    switch (action.type) {
        case GET_TEAMLIST:
            //console.log(action.teams)
            return {
                teams: action.teams,
                markedTeams: action.markedTeams,
                ownTeams: action.ownTeams
            };
        default:
            // console.log(state);
            return state
    }
}

export default team