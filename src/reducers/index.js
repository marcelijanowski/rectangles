import { combineReducers } from 'redux';
import { barReducer } from './bar/bar';

const appReducer = combineReducers({
  bars: barReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
