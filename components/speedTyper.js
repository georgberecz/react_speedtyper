"use strict"

var React = require('react');
var WordsContainer = require("./wordsContainer");
var InputContainer = require("./inputContainer");
var StatisticsContainer = require("./statisticsContainer");
var SpeedTyper;

module.exports = SpeedTyper = React.createClass({
	propTypes: {
		words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		writtenWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		currentText: React.PropTypes.string.isRequired,
		time: React.PropTypes.number.isRequired,
		handleInputChange: React.PropTypes.func.isRequired,
	},
	render: function() {
		return(
			<div className="speedTyper">
				<WordsContainer 	
					words={this.props.words} 
					writtenWords={this.props.writtenWords}
					currentText={this.props.currentText}
				/>
				<InputContainer onInputChange={this.props.handleInputChange} text={this.props.currentText}/>
				<StatisticsContainer 
					time={this.props.time}
					writtenWords={this.props.writtenWords}
					words={this.props.words}
				/>
			</div>	
		);
	}
});