import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import configureStore from './configureStore';
import DevTools from './components/redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
require('./styles/main.scss');

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(thunk)
);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <div>
      <AppContainer />
      <DevTools />
    </div>
    </Router>
  </Provider>,
    document.getElementById('main')
  );
