import { createStore } from 'redux';
import rootReducer from '../reducers';

import { loadState } from '../utils/localstorage';

/**
 * Configures and returns a new Redux store. An optional initial state can be provided to rehydrate
 * the state from storage, or to populate it with mock data in tests.
 * @param  {Object} initialState Optional initial store state
 * @return {Object}              Redux store
 */
function configureStore(initialState = undefined) {
  const persistedState = loadState();
  return createStore(
    rootReducer,
    persistedState
  );
}

export default configureStore;
