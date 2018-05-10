import { wire } from 'hyperhtml/esm';

export default class Todo {
  constructor(props, actions) {
    this.props = props;
    this.removeTodo = title => () => actions.removeTodo(title);
  }
  render() {
    return wire()`
      <div class="todo__container">
        <span class="todo__text">${this.props.title}</span>
        <span class="todo__delete" onClick=${this.removeTodo(this.props.title)}>&nbsp;X</span>
      </div>
    `;
  }
}
