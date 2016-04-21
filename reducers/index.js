import { combineReducers } from 'redux'

const initialWords = ["tree", "apple", "onomatopoeia", "car", "world", "love"];
const initialText = "";
const initialWrittenWords = [];
const initialGameStarted = false;
const initialTime = 0;
const initialBestWps = 0;
const initialBestAccuracy = 0;
const initialCounter = 0;

const initialState = {
  words: initialWords,
  text: initialText,
  writtenWords: initialWrittenWords,
  gameStarted: initialGameStarted,
  time: initialTime,
  bestWps: initialBestWps,
  bestAccuracy: initialBestAccuracy,
  /* use counter to force re-rendering of statistic compontents, hope
   there is a better way for the future  */
  counter: initialCounter 
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const speedTyperApp = (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			if (state.gameStarted) {
				var writtenWords = state.writtenWords == undefined ? [] : state.writtenWords;
				var input = action.payload.text;
				if (input.substr(input.length-1) == " ") {
					writtenWords.push(input.trim());
					input = "";
				}
				return merge(state, {
					text: input, 
					writtenWords: writtenWords});
			}
		case 'GAME_START':
			if (!(state.gameStarted)) {
				var time = action.payload.time;
				return merge(state, {
					writtenWords: [], 
					text: "", 
					time: time, 
					gameStarted: true});	
			} else return state;
		case 'GAME_STOP':
			if (state.gameStarted) {
				var currentWps = getWpm(state);
				var currentAccuracy = getAccuracy(state);
				console.log(currentAccuracy);
				var bestWps = currentWps > state.bestWps ? currentWps : state.bestWps;
				var bestAccuracy = currentAccuracy > state.bestAccuracy ? currentAccuracy : state.bestAccuracy;
				return merge(state, {gameStarted: false, bestWps: bestWps, bestAccuracy: bestAccuracy});	
			}
			return state;
		case 'UPDATE_GAME':
			if (state.gameStarted) {
				var counter = state.counter++;
				return (merge(state, {counter: counter}))
			} else 
			return state;
		default:
			return state;	
	}
}

export const getWpm = (state) => {
	var wpm = 0;
	if (state.time != 0 && state.writtenWords.length > 0) {
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

export const getElapsedTime = (state) => {
	var currentTime = Date.now();
	return state.time == 0 ? 0 : Math.floor((currentTime - state.time)/1000);
}


export default speedTyperApp;
