'use strict';

jest.disableAutomock();
import speedTyperApp from '../../reducers/GameReducer';

describe('speedTyperApp reducer', () => {
  
  it('should handle initial state', () => {
    expect(speedTyperApp(undefined, {})).toEqual({
        bestAccuracy: 0,
        bestWpm: 0,
        counter: 0,
        words: [],
        text: "",
        writtenWords: [],
        gameStarted: false,
        time: 0  
    });
  });

  it('should handle INPUT_CHANGE for incomplete word when game is started', () => {
  	expect(
  		speedTyperApp({gameStarted: true}, {
  			type: 'INPUT_CHANGE',
  			payload: {text: "blub"}})
  	).toEqual(
  		{
        text: "blub",
        writtenWords: [],
        gameStarted: true,
  		}
  	);
  });

  it('should handle INPUT_CHANGE for complete word when game is started', () => {
  	expect(
  		speedTyperApp({gameStarted: true}, {
  			type: 'INPUT_CHANGE',
  			payload: {text: "blub "}})
  	).toEqual(
  		{
        text: "",
        writtenWords: ["blub"],
        gameStarted: true,       
  		}
  	);
  });

  it('should handle GAME_START', () => {
    expect(
      speedTyperApp({gameStarted: false, time: 10}, {
        type: 'GAME_START',
        payload: {time: 10}})
    ).toEqual(
      {
        text: "",
        writtenWords: [],
        time: 10,
        gameStarted: true,       
      }
    );
  });

  it('should handle GAME_STOP', () => {
    var time = Date.now() - 1000*60;
    expect(
      speedTyperApp({time: time, words: ["blub"], writtenWords: ["blub"], gameStarted: true, bestWpm:0, bestAccuracy:0}, 
        {type: 'GAME_STOP'})
    ).toEqual(
      {
        time: time,
        writtenWords: [],
        bestWpm: 1,
        bestAccuracy: 100,
        gameStarted: false,    
        words: ["blub"],
        writtenWords: ["blub"]
      }
    );
  });

  it('should handle UPDATE_GAME', () => {
    expect(
      speedTyperApp({gameStarted: true, counter: 0}, 
        {type: 'UPDATE_GAME'})
    ).toEqual(
      {
        counter: 1, 
        gameStarted: true,
      }
    );
  });

  it('should handle SET_WORDS', () => {
    expect(
      speedTyperApp({words: []}, {
        type: 'SET_WORDS',
        payload: {words: ["blub", "blab"]}
    })).toEqual(
      {
        words: ["blub", "blab"],
      }
    );
  });

});