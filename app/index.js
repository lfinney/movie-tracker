import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools) // this is the state inside of my store :D

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('main')
  );
