import * as Redux from 'redux';
import count from './count';

const reducers = Redux.combineReducers({
  count,
});

export default reducers;
