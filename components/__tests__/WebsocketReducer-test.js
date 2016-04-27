'use strict';

jest.disableAutomock();
import reducer from '../../reducers/WebsocketReducer';

describe('WebsocketReducer reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        connected: false
    });
  });

  it('should handle WEBSOCKET_CONNECTION_ESTABLISHED', () => {
    expect(reducer({connected: false}, {
    	type: "WEBSOCKET_CONNECTION_ESTABLISHED"
    })).toEqual({
        connected: true
    });
  });

  it('should handle WEBSOCKET_CONNECTION_DROPPED', () => {
    expect(reducer({connected: true}, {
      type: "WEBSOCKET_CONNECTION_DROPPED"
    })).toEqual({
        connected: false
    });
  });

  it('should handle WEBSOCKET_CONNECTION_UNAVAILABLE', () => {
    expect(reducer({connected: true}, {
      type: "WEBSOCKET_CONNECTION_UNAVAILABLE"
    })).toEqual({
        connected: false
    });
  });

});