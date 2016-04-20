"use strict";
var React = require('react');
var Input = require('../components/input.js')
import { handleInputChange } from '../actions';
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		text: state.text,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    	onInputChange: (text) => dispatch(handleInputChange(text))
  	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);