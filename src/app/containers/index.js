import { wire } from 'hyperhtml/esm';
import * as actions from '../actions';
import store from '../store';
import { TodoList } from '../components';

export default class App {
  constructor() {
    this.todoList = new TodoList(store.getState().todos, actions);
  }
  render() {
    return wire(this)`
    ${this.todoList.render()}
    `;
  }
}
