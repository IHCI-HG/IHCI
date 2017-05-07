export const ADD_TODO = 'ADD_TODO'


// actions
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text,
    }
}

export const actions = {
    addTodo
};

const initState = {
    todos: []
}

// reducer
function todolistReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos,
                    {
                        text: action.text
                    }
                ]
            };
        default:
            return state;
    }
}

export default todolistReducer;