"use strict";
var React = require('react');
var Words = require('../components/Words.js')

import {connect} from "react-redux"

const mapStateToProps = (state) => {
	var writtenWordsCount = state.game.writtenWords.length;
	var wordCount = state.game.words.length;
	var minSlice = (writtenWordsCount -2 < 0) ? 0 : (writtenWordsCount -2);
	var maxSlice = (writtenWordsCount + 3 < wordCount) ? writtenWordsCount + 3 : wordCount;
	var words = state.game.words.slice(minSlice,maxSlice);
	var writtenWords = state.game.writtenWords.slice(minSlice,maxSlice);
	return {
		words: words,
		writtenWords: writtenWords,
		currentText: state.game.text
	};
}

export default connect(mapStateToProps)(Words)
