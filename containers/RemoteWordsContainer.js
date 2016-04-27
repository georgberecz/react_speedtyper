"use strict";
var React = require('react');
var Words = require('../components/Words.js')

import {connect} from "react-redux"

const mapStateToProps = (state) => {
	var remoteState = state.remote.state
	var writtenWordsCount = remoteState.writtenWords.length;
	var wordCount = remoteState.words.length;
	var minSlice = (writtenWordsCount -2 < 0) ? 0 : (writtenWordsCount -2);
	var maxSlice = (writtenWordsCount + 3 < wordCount) ? writtenWordsCount + 3 : wordCount;
	var words = remoteState.words.slice(minSlice,maxSlice);
	var writtenWords = remoteState.writtenWords.slice(minSlice,maxSlice);
	return {
		words: words,
		writtenWords: writtenWords,
		currentText: remoteState.text
	};
}

export default connect(mapStateToProps)(Words)