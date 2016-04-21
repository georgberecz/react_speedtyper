"use strict";

var React = require('react');
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import speedTyperApp from './reducers'
import SpeedTyper from './components/speedTyper'
import thunkMiddleware from 'redux-thunk';

let store = createStore(speedTyperApp, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
  	<SpeedTyper />
  </Provider>,
  document.getElementById('content')
);