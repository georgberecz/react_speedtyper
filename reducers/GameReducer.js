import R from 'ramda'
import {getWpm, getAccuracy} from "./index"

const initialWords = [];
const initialText = "";
const initialWrittenWords = [];
const initialGameStarted = false;
const initialStartTime = 0;
const initialCurrentTime = 0;
const initialBestWps = 0;
const initialBestAccuracy = 0;
const initialCounter = 0;

const initialState = {
  words: initialWords,
  text: initialText,
  writtenWords: initialWrittenWords,
  gameStarted: initialGameStarted,
  startTime: initialStartTime,
  bestWpm: initialBestWps,
  bestAccuracy: initialBestAccuracy,
  currentTime: initialCurrentTime,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			if (state.gameStarted) {
				var writtenWords = state.writtenWords == undefined ? [] : state.writtenWords;
				var input = action.payload.text;
				if (input.substr(input.length-1) == " ") {
					writtenWords.push(input.trim());
					input = "";
				}
				return R.merge(state, {
					text: input, 
					writtenWords: writtenWords});
			}
		case 'GAME_START':
			if (!(state.gameStarted)) {
				var startTime = action.payload.startTime;
				return R.merge(state, {
					writtenWords: [], 
					text: "", 
					startTime: startTime,
					currentTime: startTime, 
					gameStarted: true});	
			} else return state;
		case 'GAME_STOP':
			if (state.gameStarted) {
				var currentWps = getWpm(state);
				var currentAccuracy = getAccuracy(state);
				var bestWpm = R.max(currentWps, state.bestWpm);
				var bestAccuracy = R.max(currentAccuracy, state.bestAccuracy);
				return R.merge(state, {gameStarted: false, bestWpm: bestWpm, bestAccuracy: bestAccuracy});	
			}
			return state;
		case 'UPDATE_GAME':
			if (state.gameStarted) {
				var currentTime = action.payload.currentTime;
				return R.merge(state, {currentTime: currentTime});
			} else 
			return state;
		case 'SET_WORDS':
			var words = action.payload.words;
			return R.merge(state, {words: words});
		default:
			return state;	
	}
}

export default reducer;
