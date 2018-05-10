import { wire } from 'hyperhtml/esm';
import { Todo } from '../../components';

export default class TodoList {
  constructor(state, actions) {
    this.state = state;
    this.actions = actions;
  }
  render() {
    const todos = this.state.map(todo => new Todo({ title: todo.title }, this.actions));
    return wire()`
      ${todos}
    `;
  }
}
