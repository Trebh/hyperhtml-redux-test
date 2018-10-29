import store from '../store';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOCATION_CHANGE = 'LOCATION_CHANGE';

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

export function addTodo(title) {
  store.dispatch({
    type: ADD_TODO,
    title,
  });
}

export function removeTodo(title) {
  store.dispatch({
    type: REMOVE_TODO,
    title,
  });
}

export function goTo(state) {
  store.dispatch({
    type: LOCATION_CHANGE,
    state,
  });
}
