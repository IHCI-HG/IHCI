const teamInitialState = {
   teams: [],
   markedTeams: [],
   ownTeams: [],
}

const team = (state = teamInitialState, action) => {
    
    switch (action.type) {
        case 'test':
            console.log(state)
            return state
    
        default:
            // console.log(state);
            return state
    }
}

export default team