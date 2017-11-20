import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/app/App';
import configureStore from './stores/configureStore';
import { saveState } from './utils/localstorage';
import registerServiceWorker from './registerServiceWorker';

import './global/styles/global.css';
import './global/styles/print.css';

const store = configureStore()

store.subscribe(() => {
  saveState({
    bars: store.getState().bars
  })
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
