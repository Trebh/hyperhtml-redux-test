import { wire } from 'hyperhtml/esm';
import { Button, Count } from '../../components';

export default class Counter {
  constructor(actions) {
    this.actions = actions;
    this.incBtn = new Button('+1', this.actions.inc);
    this.decBtn = new Button('-1', this.actions.dec);
    this.resBtn = new Button('reset', this.actions.res);
  }
  render() {
    const count = new Count();

    return wire(this)`
    <div>${[
    count.render(),
    this.incBtn.render(),
    this.decBtn.render(),
    this.resBtn.render()]}</div>
    `;
  }
}
