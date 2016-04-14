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

/*
module.exports = SpeedTyperContainer = React.createClass({
	getInitialState: function() {
		return {text: '', writtenWords:[], timerStarted: false, time:0};
	},
	handleInputChange: function(text){
		var timerStarted = this.state.timerStarted;
		var time = this.state.time;
		var writtenWords = this.state.writtenWords;
		var input = text;
		if (!(timerStarted)) {
			timerStarted = true;
			time = Date.now()
		}
		if (input.substr(input.length-1) == " ") {
			writtenWords.push(input.trim());
			input = "";
		}
		this.setState({text: input, 
			writtenWords: writtenWords,
			timerStarted: timerStarted,
			time: time}
		);
	},
	render: function() {
		var words = ["tree", "apple", "onomatopoeia", "car", "world", "love"];
		return (
			<SpeedTyper 
				words={words} 
				writtenWords={this.state.writtenWords} 
				currentText={this.state.text} 
				time={this.state.time}
				handleInputChange={this.handleInputChange}
			/>	
		);
	}
});*/
