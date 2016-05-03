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
import createRoutes from './Routes'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { routerMiddleware } from 'react-router-redux'
import R from 'ramda'


const finalCreateStore = R.compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

let store = finalCreateStore(speedTyperApp);

const history = syncHistoryWithStore(browserHistory, store)
let Routes = createRoutes(history)


render(
  	<Provider store={store}>
  		<Routes />
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
