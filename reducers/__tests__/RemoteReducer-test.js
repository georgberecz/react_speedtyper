'use strict';

jest.disableAutomock();
import reducer from '../RemoteReducer';

describe('RemoteReducer reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      state: {
        words: [],
        text: "",
        writtenWords: [],
        gameStarted: false,
        startTime: 0,
        bestWpm: 0,
        bestAccuracy: 0,
        currentTime: 0},
      secondPlayerConnected: false
    });
  });

  it('should handle WEBSOCKET_CONNECTION_ESTABLISHED', () => {
    expect(reducer({
      state: {
        words: [],
        text: "",
        writtenWords: [],
        gameStarted: false,
        startTime: 0,
        bestWpm: 0,
        bestAccuracy: 0,
        currentTime: 0},
      secondPlayerConnected: false
    }, {
    	type: "RECEIVED_REMOTE_STATE",
      payload: {
        state: {
          words: ["blub","bleb"],
          text: "bla",
          writtenWords: ["blub"],
          gameStarted: true,
          startTime: 10,
          bestWpm: 10,
          bestAccuracy: 10,
          currentTime: 10
        }
      }
    })).toEqual({
      state: {
        words: ["blub","bleb"],
          text: "bla",
          writtenWords: ["blub"],
          gameStarted: true,
          startTime: 10,
          bestWpm: 10,
          bestAccuracy: 10,
          currentTime: 10
      },
      secondPlayerConnected: true
    });
  });
});