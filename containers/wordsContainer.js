"use strict";
var React = require('react');
var Words = require('../components/words.js')

import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		words: state.words,
		writtenWords: state.writtenWords,
		currentText: state.text
	};
}

export default connect(mapStateToProps)(Words)