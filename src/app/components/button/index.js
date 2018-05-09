import { wire } from 'hyperhtml/esm';

export default class Button {
  constructor(label, action) {
    this.label = label;
    this.action = action;
  }
  render() {
    return wire(this)`
        <button onclick="${this.action}">
            ${this.label}
        </button>
        `;
  }
}
