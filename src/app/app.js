import { bind } from 'hyperhtml/esm';
import App from './containers';
import store from './store';
import '../../index.html';

const app = new App();

render();
store.subscribe(render);

function render() {
  bind(document.querySelector('#app'))`
  <div class="app__container">${app.render()}</div>
`;
}
