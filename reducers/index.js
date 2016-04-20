import { combineReducers } from 'redux'

const initialWords = ["tree", "apple", "onomatopoeia", "car", "world", "love"];
const initialText = "";
const initialWrittenWords = [];
const initialTimerStarted = false;
const initialTime = 0;

const initialState = {
  words: initialWords,
  text: initialText,
  writtenWords: initialWrittenWords,
  timerStarted: initialTimerStarted,
  time: initialTime
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const speedTyperApp = (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			var timerStarted = state.timerStarted;
			var time = state.time;
			var writtenWords = state.writtenWords == undefined ? [] : state.writtenWords;
			var input = action.payload;
			if (!(state.timerStarted)) {
				timerStarted = true;
				time = Date.now()
			}
			if (input.substr(input.length-1) == " ") {
				writtenWords.push(input.trim());
				input = "";
			}
			return merge(state, {
				text: input, 
				writtenWords: writtenWords,
				timerStarted: timerStarted,
				time: time});
		default:
			return state;	
	}
}

export const getWpm = (state) => {
	var wpm = 0;
	if (state.time != 0) {
		var date = new Date();
		var currentTime = date.getTime();
		var timeDifference = (currentTime - state.time) / 1000; //in s
		var wps = state.writtenWords.length/timeDifference; // words per second
		wpm = Math.round(wps * 60); // words per minute	
	}
	return (wpm);
}

export const getAccuracy = (state) => {
	var correctWords = 0;
	var wordCount = 0;
	for (var i = 0; i < state.writtenWords.length; i++) {
		if (i < state.words.length) {
			if (state.writtenWords[i] == state.words[i]) correctWords++;
		}
		wordCount++;
	}
	var accuracy = (wordCount > 0) ? (Math.round((correctWords/wordCount)*100)): 0;
	return accuracy;
}


export default speedTyperApp;
