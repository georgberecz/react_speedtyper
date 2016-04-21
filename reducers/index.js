import { combineReducers } from 'redux'
import gameReducer from "./GameReducer"
import fetchReducer from "./FetchReducer"


const reducer = combineReducers({
	game: gameReducer,
	fetch: fetchReducer
})

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

export default reducer;
