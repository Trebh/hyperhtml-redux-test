import * as Redux from 'redux';
import reducers from '../reducers';

/* eslint-disable no-underscore-dangle */
const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const initialState = {};

const store = Redux.createStore(
  reducers,
  initialState,
  devTools,
);

export default store;
