import { LOCATION_CHANGE } from '../actions';

function location(state = 'counter', action) {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return action.state;
    }
    default:
      return state;
  }
}

export default location;
