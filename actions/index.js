

export const handleInputChange = (text) => {
	return {
		type: "INPUT_CHANGE",
		payload: {text: text}
	}
}

let timer;
export const startGame = () => {
	return (dispatch) => {
		dispatch({
			type: "GAME_START",
			payload: {time: Date.now()}
		})
		if (timer) clearInterval(timer);
		timer = setInterval(() => {
			dispatch(updateGame())
		}, 1000)
	}
}

export const stopGame = () => {
	return (dispatch) => {
		dispatch({type: "GAME_STOP"})
		clearInterval(timer);
	}
}

export const updateGame = () => {
	return {
		type: "UPDATE_GAME",
		payload: {time: Date.now()}	
	} 
}