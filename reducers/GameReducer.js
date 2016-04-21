import R from 'ramda'
import {getWpm, getAccuracy} from "./index"

const initialWords = [];
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
   there is a less "hacky" way for the future  */
  counter: initialCounter 
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
				var time = action.payload.time;
				return R.merge(state, {
					writtenWords: [], 
					text: "", 
					time: time, 
					gameStarted: true});	
			} else return state;
		case 'GAME_STOP':
			if (state.gameStarted) {
				var currentWps = getWpm(state);
				var currentAccuracy = getAccuracy(state);
				var bestWps = currentWps > state.bestWps ? currentWps : state.bestWps;
				var bestAccuracy = currentAccuracy > state.bestAccuracy ? currentAccuracy : state.bestAccuracy;
				return R.merge(state, {gameStarted: false, bestWps: bestWps, bestAccuracy: bestAccuracy});	
			}
			return state;
		case 'UPDATE_GAME':
			if (state.gameStarted) {
				var counter = R.add(state.counter,1);
				return R.merge(state, {counter: counter});
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