"use strict"

var React = require('react')
var Highscore = require('../Components/Highscore')

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		bestWps: state.bestWps,
		bestAccuracy: state.bestAccuracy
	}
};

export default connect(mapStateToProps)(Highscore);