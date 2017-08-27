export const GET_TEAMLIST = 'GET_TEAMLIST'
export const SET_CURRENT_TEAM = 'SET_CURRENT_TEAM'
export const HANDLE_STAR = 'HANDLE_STAR'

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

export function handleStar(teamID){
    return {
        type: HANDLE_STAR,
        teamID: teamID
    }
}

// export function getTeamlist(){
//     return {
//         type: GET_TEAMLIST
//     }
// }

export const actions = {
    getTeamlist,
    setCurrentTeam,
    handleStar
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

        case HANDLE_STAR:
            state.teams.map((item) => {
                //console.log(item.isStared)
                if(item.teamID == action.teamID){
                    item.isStared = !item.isStared;                    
                }
            })
            var newMarkedTeams = [];
            state.teams.map((item)=>{
                if(item.isStared === true){
                    newMarkedTeams.push(item);
                }
            })
            return{
                ...state,
                markedTeams: newMarkedTeams
            }
        default:
            // console.log(state);
            return state
    }
}

export default team