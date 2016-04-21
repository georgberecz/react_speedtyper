const initialWords = ["tree", "apple", "onomatopoeia", "car", "world", "love"];
const initialText = "";
const initialWrittenWords = [];
const initialGameStarted = false;
const initialTime = 0;

const initialState = {
  words: initialWords,
  text: initialText,
  writtenWords: initialWrittenWords,
  gameStarted: initialGameStarted,
  time: initialTime,
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

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
				return merge(state, {gameStarted: false});	
			} else return state;
		default:
			return state;	
	}
}

export const getWpm = (state) => {
	var wpm = 0;
	var writtenWords = state.writtenWords == undefined ? [] : state.writtenWords;
	if (state.time != 0 && writtenWords.length > 0) {
		var date = new Date();
		var currentTime = date.getTime();
		var timeDifference = (currentTime - state.time) / 1000; //in s
		var wps = writtenWords.length/timeDifference; // words per second
		wpm = Math.round(wps * 60); // words per minute	
	}
	return (wpm);
}

export const getAccuracy = (state) => {
	var correctWords = 0;
	var wordCount = 0;
	var writtenWords = state.writtenWords == undefined ? [] : state.writtenWords;
	for (var i = 0; i < writtenWords.length; i++) {
		if (i < state.words.length) {
			if (writtenWords[i] == state.words[i]) correctWords++;
		}
		wordCount++;
	}
	var accuracy = (wordCount > 0) ? (Math.round((correctWords/wordCount)*100)): 0;
	return accuracy;
}

export const getElapsedTime = (state) => {
	var currentTime = Date.now();
	return state.time == 0 || state.time == undefined ? 0 : Math.floor((currentTime - state.time)/1000);
}



export default reducer;






