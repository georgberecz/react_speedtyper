import R from 'ramda'

const initialState = {
  	state: {
	  	words: [],
	  	text: "",
	  	writtenWords: [],
	  	gameStarted: false,
	  	startTime: 0,
	  	bestWpm: 0,
	  	bestAccuracy: 0,
	  	currentTime: 0},
	secondPlayerConnected: false
}

const reducer = (state=initialState, action) => {
  	switch (action.type) {
		case 'RECEIVED_REMOTE_STATE':
    		return R.merge(state, {state: action.payload.state, secondPlayerConnected:true})
		default:
	  		return state
  	}
};

export default reducer;