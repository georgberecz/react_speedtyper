"use strict";

var React = require('react');
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import speedTyperApp from './reducers'
import SpeedTyper from './components/speedTyper'

let store = createStore(speedTyperApp)

render(
  <Provider store={store}>
  	<SpeedTyper />
  </Provider>,
  document.getElementById('content')
);