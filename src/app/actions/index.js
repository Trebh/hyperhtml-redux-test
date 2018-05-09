import store from '../store';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export function inc() {
  store.dispatch({
    type: INCREMENT,
  });
}
export function dec() {
  store.dispatch({
    type: DECREMENT,
  });
}
export function res() {
  store.dispatch({
    type: RESET,
  });
}
