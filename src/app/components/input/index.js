import { wire } from 'hyperhtml/esm';

export default class Input {
  constructor(placeholder, action) {
    this.placeholder = placeholder;
    this.action = (e) => {
      if (e.keyCode === 13) {
        action(e.target.value);
      }
    };
  }
  render() {
    return wire(this)`
      <input type="text" onkeyup="${this.action}" placeholder=${this.placeholder}></input>
    `;
  }
}
