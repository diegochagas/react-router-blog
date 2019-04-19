import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(reducers)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>, 
document.getElementById('root'));