import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import App from './containers/App';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducers
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );

registerServiceWorker();
