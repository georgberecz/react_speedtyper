'use strict';

jest.disableAutomock();
import speedTyperApp from '../../reducers/index';

describe('speedTyperApp reducer', () => {
  
  it('should handle initial state', () => {
    expect(speedTyperApp(undefined, {})).toEqual({
    	words: ["tree", "apple", "onomatopoeia", "car", "world", "love"],
    	text: "",
    	writtenWords: [],
    	timerStarted: false,
    	time: 0
    });
  });

  it('should handle INPUT_CHANGE for incomplete word', () => {
  	var time = Date.now()
  	expect(
  		speedTyperApp([], {
  			type: 'INPUT_CHANGE',
  			payload: {text: "blub"}})
  	).toEqual(
  		{
  			text: "blub",
  			time: time,
  			timerStarted: true,
  			writtenWords: []
  		}
  	);
  });

  it('should handle INPUT_CHANGE for complete word', () => {
  	var time = Date.now()
  	expect(
  		speedTyperApp([], {
  			type: 'INPUT_CHANGE',
  			payload: {text: "blub "}})
  	).toEqual(
  		{
  			text: "",
  			time: time,
  			timerStarted: true,
  			writtenWords: ["blub"]
  		}
  	);
  });
});