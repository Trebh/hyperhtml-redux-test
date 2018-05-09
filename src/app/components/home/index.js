import { wire } from 'hyperhtml/esm';

export default class Home {
  constructor(state) {
    this.state = state;
  }
  render() {
    return wire(this)`
          <count>
            <h1>Hello, world!</h1>
            <h2>Count is ${this.state}</h2>
          </count>
        `;
  }
}
