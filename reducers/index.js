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
			var writtenWords = state.writtenWords;
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

export default speedTyperApp;
