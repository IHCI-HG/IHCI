const projectInitialState = {
    name: "",
    publisher: "",
    
    selectedItem: '项目中心',
    defaultSelectedKeys: ['项目中心']
}

const project = (state = projectInitialState, action) => {
    
    switch (action.type) {
        case 'test':
            console.log(state)
            state.selectedItem = '我的项目'
            return state
    
        default:
            // console.log(state);
            return state
    }
}

export default project
