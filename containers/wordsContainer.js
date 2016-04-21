"use strict";
var React = require('react');
var Words = require('../components/Words.js')

import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		words: state.game.words,
		writtenWords: state.game.writtenWords,
		currentText: state.game.text
	};
}

export default connect(mapStateToProps)(Words)