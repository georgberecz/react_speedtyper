'use strict';

jest.disableAutomock();
import speedTyperApp from '../GameReducer';

describe('speedTyperApp reducer', () => {
  
  it('should handle initial state', () => {
    expect(speedTyperApp(undefined, {})).toEqual({
        bestAccuracy: 0,
        bestWpm: 0,
        words: [],
        text: "",
        writtenWords: [],
        gameStarted: false,
        currentTime: 0,
        startTime: 0  
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
      speedTyperApp({gameStarted: false, startTime: 10, currentTime: 5}, {
        type: 'GAME_START',
        payload: {startTime: 10}})
    ).toEqual(
      {
        text: "",
        writtenWords: [],
        startTime: 10,
        currentTime: 10,
        gameStarted: true,       
      }
    );
  });

  it('should handle GAME_STOP', () => {
    var currentTime = Date.now();
    var startTime = currentTime - 1000*60;
    
    expect(
      speedTyperApp({currentTime: currentTime, startTime:startTime, words: ["blub"], writtenWords: ["blub"], gameStarted: true, bestWpm:0, bestAccuracy:0}, 
        {type: 'GAME_STOP'})
    ).toEqual(
      {
        currentTime: currentTime,
        startTime: startTime,
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
    var currentTime = Date.now();
    expect(
      speedTyperApp({gameStarted: true, currentTime: 0}, 
        {type: 'UPDATE_GAME',
         payload: {currentTime: currentTime}
      })
    ).toEqual(
      {
        currentTime: currentTime, 
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