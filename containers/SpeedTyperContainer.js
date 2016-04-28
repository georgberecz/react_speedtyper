"use strict"

var React = require('react')
var SpeedTyper = require('../Components/SpeedTyper')

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		secondPlayerConnected: state.remote.secondPlayerConnected
	}
};

export default connect(mapStateToProps)(SpeedTyper);
