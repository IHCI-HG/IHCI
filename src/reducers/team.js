export const GET_TEAMLIST = 'GET_TEAMLIST'
export const SET_CURRENT_TEAM = 'SET_CURRENT_TEAM'
export const HANDLE_STAR = 'HANDLE_STAR'

const teamInitialState = {
   teams: [
       {
           teamName: "testTeam1",
           isManager: true,
           isStared: true,
           teamID: 1
       },
       {
           teamName: "testTeam2",
           isManager: false,
           isStared: true,
           teamID: 2
       },
       {
           teamName: "testTeam3",
           isManager: false,
           isStared: false,
           teamID: 3
       },
       {
           teamName: "testTeam4",
           isManager: false,
           isStared: false,
           teamID: 4
       },
       {
           teamName: "testTeam5",
           isManager: false,
           isStared: false,
           teamID: 5
       },
   ],
   markedTeams: [
       {
           teamName: "testTeam1",
           isManager: false,
           isStared: true,
           teamID: 1
       },
       {
           teamName: "testTeam2",
           isManager: false,
           isStared: true,
           teamID: 2
       },
   ],
   ownTeams: [
       {
           teamName: "testTeam1",
           isManager: true,
           isStared: true,
           teamID: 1
       },
   ],
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
            // state.teams.map((item) => {
            //     //console.log(item.isStared)
            //     if(item.teamID == action.teamID){
            //         item.isStared = !item.isStared;
            //     }
            // })
            // var newMarkedTeams = [];
            // state.teams.map((item)=>{
            //     if(item.isStared === true){
            //         newMarkedTeams.push(item);
            //     }
            // })

            var teams = [...state.teams];
            var index = 0
            for (var index = 0; index < teams.length; index++) {
                if(teams[index].teamID == action.teamID) {
                    teams[index] = {
                        ...teams[index],
                        isStared: !teams[index].isStared
                    }
                }
            }
            var markedTeams = [];
            for (var index = 0; index < teams.length; index++) {
                if(teams[index].isStared == true) {
                    markedTeams.push(teams[index])
                }
            }

            return{
                ...state,
                teams,
                markedTeams
            }
        default:
            // console.log(state);
            return state
    }
}

export default team
