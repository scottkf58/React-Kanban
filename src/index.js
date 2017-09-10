import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import App from './containers/App';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as Actions from './actions';

export default function configureStore(initialState) {
  return createStore(reducers, initialState,
    // Apply to store
    applyMiddleware(ReduxThunk)
  );
}

const store = configureStore();
store.dispatch(Actions.getCards());
// const store = createStore(
//   reducers,
//   applyMiddleware(ReduxThunk)
// );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );

registerServiceWorker();
