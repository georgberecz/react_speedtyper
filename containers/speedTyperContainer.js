"use strict";
var React = require('react');
var SpeedTyper = require("../components/speedTyper")
import { connect } from 'react-redux';
import { handleInputChange } from '../actions';

const mapStateToProps = (state) => {
  return {
    words: state.words,
    currentText: state.text,
    writtenWords: state.writtenWords,
    time: state.time,
    timerStarted: state.timerStarted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (text) => dispatch(handleInputChange(text))
  }
};

const SpeedTyperContainer = connect(
	mapStateToProps, mapDispatchToProps
)(SpeedTyper);

export default SpeedTyperContainer