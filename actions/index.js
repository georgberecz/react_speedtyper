import ajaxRequest from './AjaxRequest'
import { browserHistory } from 'react-router'

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
			payload: {startTime: Date.now()}
		})
		if (timer) clearInterval(timer);
		timer = setInterval(() => {
			dispatch(updateGame())
		}, 1000)
	}
}

export const stopGame = () => {
	browserHistory.push('/pastGames')
	return (dispatch) => {
		dispatch({
			type: "GAME_STOP",
			payload: {currentTime: Date.now()}
		})
		clearInterval(timer);
	}
}

export const updateGame = () => {
	return {
		type: "UPDATE_GAME",
		payload: {currentTime: Date.now()}
	} 
}

export const fetchPost = () => {
  	return (dispatch, getState) => {
	    const addWords = (wordObject) => {
	      	if (getState().fetch.inProgress) {
	        	dispatch(setWords(wordObject.words));
	        	dispatch(stopWordsFetch())
	      	}
	    }
	    const onFetchError = (error) => {
	      	dispatch(stopWordsFetch())
	    }
	    ajaxRequest("/words.json", "GET", addWords, onFetchError)
  	}
}

export const setWords = (words) => {
	return {
		type: "SET_WORDS",
		payload: {words: words}
	}
}

export const wordsFetchRequested = () => {
  	return {
    	type: "WORDS_FETCH_REQUESTED",
    	payload: {}
  	}
}

export const stopWordsFetch = () => {
  	return {
    	type: "WORDS_FETCH_STOPPED",
    	payload: {}
  	}
}

export const receivedRemoteState = (state) => {
  return {
    type: "RECEIVED_REMOTE_STATE",
    payload: {state: state}
  }
}
