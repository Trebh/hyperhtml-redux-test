import * as Redux from 'redux';
import todos from './todos';
import count from './count';
import location from './location';

const reducers = Redux.combineReducers({
  todos,
  count,
  location,
});

export default reducers;
