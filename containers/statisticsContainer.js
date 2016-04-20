"use strict";
var React = require('react');
var Statistics = require('../components/statistics.js')
import {getWpm, getAccuracy} from "../reducers"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		wpm: getWpm(state),
		accuracy: getAccuracy(state)
	};
}

export default connect(mapStateToProps)(Statistics)