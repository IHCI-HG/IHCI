import { connect } from 'react-redux'
import { addTodo } from '../modules/todolist'

import TodoList from '../components/TodoList'

const mapDispatchToProps ={
    addTodo: (arg) => addTodo(arg)
};

const mapStateToProps = (state) =>({
    todos: state.todolist.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);