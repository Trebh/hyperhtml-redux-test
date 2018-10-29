import { wire } from 'hyperhtml/esm';
import * as actions from '../../actions';
import { Counter } from '../../components';

export default class CounterContainer {
  render() {
    this.counter = new Counter(actions);

    return wire(this)`
    <div>${this.counter.render()}</div>
    `;
  }
}
