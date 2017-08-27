export const GET_TEAMLIST = 'GET_TEAMLIST'
export const SET_CURRENT_TEAM = 'SET_CURRENT_TEAM'

const teamInitialState = {
   teams: [],
   markedTeams: [],
   ownTeams: [],
   currentTeam: ''
}

export function getTeamlist(teams, markedTeams, ownTeams){
    return  {
        type: GET_TEAMLIST,
        teams: teams,
        markedTeams: markedTeams,
        ownTeams: ownTeams
    }
};

export function setCurrentTeam(currentTeam){
    return {
        type: SET_CURRENT_TEAM,
        currentTeam: currentTeam
    }
}

// export function setCurrentTeam(){
//     return {
//         type: SET_CURRENT_TEAM
//     }
// }

// export function getTeamlist(){
//     return {
//         type: GET_TEAMLIST
//     }
// }

export const actions = {
    getTeamlist,
    setCurrentTeam
};

const team = (state = teamInitialState, action) => {
    
    switch (action.type) {
        case GET_TEAMLIST:
            //console.log(action.teams)
            return {
                ...state,
                teams: action.teams,
                markedTeams: action.markedTeams,
                ownTeams: action.ownTeams,
            }
        case SET_CURRENT_TEAM:
            return {
                ...state,
                currentTeam: action.currentTeam,
            }
        default:
            // console.log(state);
            return state
    }
}

export default team