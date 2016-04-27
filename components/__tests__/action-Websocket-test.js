import {websocketConnectionRequested, sendWebsocketMessage} from '../../actions/Websocket'

import { WebSocket, Server } from 'mock-socket'

// make sinon,chai,etc. work with jest
const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

global.chai = require('chai');
expect = chai.expect;
global.sinon = require('sinon');

const sinonChai = require('sinon-chai');
chai.use(sinonChai);
//

jest.disableAutomock();

const actualWebSocket = window.WebSocket;
let clock, dispatch, getState;

describe('Websocket actions', () => {
  let mockServer;

  beforeEach(() => {
    global.WebSocket = WebSocket;
    clock = sinon.useFakeTimers()
    dispatch = sinon.stub()
    getState = sinon.stub()
    mockServer = new Server('ws://localhost:8081')
  })

  afterEach(() => {
    mockServer.close()
    global.WebSocket = actualWebSocket;
    clock.restore()
  })

  describe("websocketConnectionRequested", () => {
    it("dispatches established action when connected to server", () => {
      websocketConnectionRequested()(dispatch, getState)
      // There is delay before onopen is called in the mock websocket
      // https://github.com/thoov/mock-socket/blob/master/src/helpers/delay.js
      clock.tick(100)

      expect(dispatch).to.have.been.calledWith({
        type: 'WEBSOCKET_CONNECTION_ESTABLISHED',
        payload: {}
      })
    })

    it("dispatches dropped action when disconnected from server", () => {
      websocketConnectionRequested()(dispatch, getState)
      mockServer.close()
      expect(dispatch).to.have.been.calledWith({
        type: 'WEBSOCKET_CONNECTION_DROPPED',
        payload: {}
      })
    })
  })

  describe("sendWebsocketMessage", () => {
    it("sends stringified message to server", () => {
      websocketConnectionRequested()(dispatch, getState)
      const onMessage = sinon.stub()
      mockServer.on('message', onMessage)
      sendWebsocketMessage({a: 1})

      expect(onMessage).to.have.been.calledWith('{"a":1}')
    })
  })

  describe("receiving websocket messages", () => {
    beforeEach(() => websocketConnectionRequested()(dispatch, getState))

    it("interprets incoming message as remote comments", () => {
      mockServer.send('[{"author": "Alien", "comment": "Hello"}]')
      expect(dispatch).to.have.been.calledWith({
        type: 'RECEIVED_REMOTE_STATE',
        payload: {state: [{author: 'Alien', comment: 'Hello'} ]}
      })
    })

    it('ignores unparseable messages', () => {
      mockServer.send('[}')
      expect(dispatch).to.not.have.been.called
    })
  })

})