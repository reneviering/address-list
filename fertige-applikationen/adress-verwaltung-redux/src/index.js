import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
