function todos(state = { todos: [] }, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        title: action.title,
      };
      return Object.assign({}, state, { todos: [...state.todos, newTodo] });
    }
    case 'REMOVE_TODO': {
      const filteredTodos = todos.filter(todo => todo.title !== action.title);
      return Object.assign({}, state, { todos: filteredTodos });
    }
    default:
      return state;
  }
}

export default todos;
