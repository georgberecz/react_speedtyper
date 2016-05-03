import { combineReducers } from 'redux'
import gameReducer from "./GameReducer"
import fetchReducer from "./FetchReducer"
import webSocketReducer from "./WebSocketReducer"
import remoteReducer from "./RemoteReducer"
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
	game: gameReducer,
	fetch: fetchReducer,
	websocket: webSocketReducer,
	remote: remoteReducer,
	routing: routerReducer
})

export const getWpm = (state) => {
	var wpm = 0;
	if (state.startTime != 0 && state.writtenWords.length > 0) {
		var correctWordsCount = 0;
		for (var i = 0; i < state.writtenWords.length; i++) {
			if (state.writtenWords[i] === state.words[i]) 
				correctWordsCount++;
		}

		var currentTime = state.currentTime;
		var timeDifference = (currentTime - state.startTime) / 1000; //in s
		var wps = correctWordsCount/timeDifference; // words per second
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
	var currentTime = state.currentTime;
	return state.startTime == 0 ? 0 : Math.floor((currentTime - state.startTime)/1000);
}

export default reducer;
