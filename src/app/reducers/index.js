import * as Redux from 'redux';
import todos from './todos';

const reducers = Redux.combineReducers({
  todos,
});

export default reducers;
