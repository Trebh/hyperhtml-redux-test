import { wire } from 'hyperhtml/esm';
import Todo from '../../components';

export default class TodoList {
  constructor(state, actions) {
    this.state = state;
    this.actions = actions;
  }
  render() {
    const todos = this.state.todos.map(todo => new Todo({
      title: todo.title,
      actions: this.actions,
    }));
    return wire()`
      ${todos}
    `;
  }
}
