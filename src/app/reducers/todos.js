function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        title: action.title,
      };
      return [...state, newTodo];
    }
    case 'REMOVE_TODO': {
      const filteredTodos = state.filter(todo => todo.title !== action.title);
      return filteredTodos;
    }
    default:
      return state;
  }
}

export default todos;
