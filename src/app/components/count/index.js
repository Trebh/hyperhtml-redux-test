import { wire } from 'hyperhtml/esm';
import store from '../../store';

export default class Count {
  constructor() {
    this.state = store.getState();
  }
  render() {
    return wire()`
      <div>${this.state.count}</div>
    `;
  }
}
