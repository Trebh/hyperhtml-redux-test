import { wire } from 'hyperhtml/esm';
import * as actions from '../actions';
import store from '../store';
import { TodoList, Input } from '../components';

export default class App {
  constructor() {
    this.input = new Input('insert a new todo', actions.addTodo);
  }
  render() {
    this.todoList = new TodoList(store.getState().todos, actions);

    return wire(this)`
    <div>${this.input.render()}</div>
    <div>${this.todoList.render()}</div>
    `;
  }
}
