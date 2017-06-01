const projectInitialState = {
    name: "",
    publisher: "",
    
}

const project = (state = projectInitialState, action) => {
    
    switch (action.type) {
        case 'test':
            return state
    
        default:
            // console.log(state);
            return state
    }
}

export default project
