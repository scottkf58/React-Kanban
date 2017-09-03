import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import cardsReducer from './reducers';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
const store = createStore(cardsReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );

registerServiceWorker();
