import R from 'ramda'

const initialState = {
  	inProgress: false,
}

const reducer = (state=initialState, action) => {
  	switch (action.type) {
		case 'WORDS_FETCH_REQUESTED':
	    	return R.merge(state, {inProgress: true});
	  	case 'WORDS_FETCH_STOPPED':
	    	return R.merge(state, {inProgress: false});
		default:
		  	return state
  	}
};

export default reducer;
