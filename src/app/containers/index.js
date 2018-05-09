import { wire } from 'hyperhtml/esm';
import * as actions from '../actions';
import { Counter } from '../components';

export default class App {
  constructor() {
    this.counter = new Counter(actions);
  }
  render() {
    return wire(this)`
    ${this.counter.render()}
    `;
  }
}
