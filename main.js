"use strict";

var React = require('react')
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import speedTyperApp from './reducers'
import SpeedTyperGame from './components/SpeedTyperGame'
import thunkMiddleware from 'redux-thunk'
import actionLogger from './middleware/ActionLogger'
import { websocketConnectionRequested, sendWebsocketMessage } from './actions/Websocket';

let store = createStore(
	speedTyperApp, 
	applyMiddleware(
		thunkMiddleware,
		actionLogger(window.console)
	)
);

render(
  	<Provider store={store}>
  		<SpeedTyperGame />
  	</Provider>,
  	document.getElementById('content')
);


let previousState;
const unsubscribe = store.subscribe( () => {
  const newState = store.getState().game

  if (previousState !== newState) {
    sendWebsocketMessage(store.getState().game)
  }

  previousState = newState
})

// Immediately connected to websocket, this could also be done only when e.g a button is pushed
store.dispatch(websocketConnectionRequested())