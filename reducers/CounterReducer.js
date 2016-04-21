
const initialCounter = 0;

const initialState = {
  /* use counter to force re-rendering of statistic compontents, hope
   there is a better way for the future  */
  counter: initialCounter 
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_GAME':
			console.log('update game');
			if (state.gameStarted) {
				var counter = state.counter++;
				return (merge(state, {counter: counter}))
			} else return state;
		default:
			return state;
	}
}

export default reducer;
