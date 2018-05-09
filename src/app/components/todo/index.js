import { wire } from 'hyperhtml/esm';

export default class Todo {
  constructor(props, actions) {
    this.props = props;
    this.actions = actions;
  }
  render() {
    return wire()`
      <div class="todo__container">
        <div class="todo__text">${this.props.title}</div>
        <div class="todo__delete" onClick=${this.actions.removeTodo}>X</div>
      </div>
    `;
  }
}
