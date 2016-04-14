"use strict";

var React = require('react');
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import speedTyperApp from './reducers'
import SpeedTyperContainer from './containers/speedTyperContainer'

let store = createStore(speedTyperApp)

render(
  <Provider store={store}>
  	<SpeedTyperContainer />
  </Provider>,
  document.getElementById('content')
);