import Navigo from 'navigo';
import { wire } from 'hyperhtml/esm';
import CounterContainer from './counterContainer';
import TodoContainer from './todoContainer';
import * as actions from '../actions';

export default class App {
  constructor() {
    this.counter = new CounterContainer();
    this.todos = new TodoContainer();
    this.currentPageContainer = this.counter;

    this.router = new Navigo(null, true, '#!');

    this.router.on({
      counter: () => {
        this.currentPageContainer = this.counter;
        actions.goTo('counter');
      },
      todos: () => {
        this.currentPageContainer = this.todos;
        actions.goTo('todos');
      },
    });

    this.router.on(() => { this.router.navigate('counter'); });
    this.router.resolve();
  }


  render() {
    return wire(this)`
      <a href="#!counter" data-navigo>counter</a>
      <br>
      <a href="#!todos" data-navigo>todos</a>
      ${this.currentPageContainer.render()}
    `;
  }
}
