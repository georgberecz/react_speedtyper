"use strict";
var React = require('react');
var SpeedTyperWord = require("./speedTyperWord");
var SpeedTyperCurrentWord = require("./speedTyperCurrentWord");
var SpeedTyperWords;

module.exports = SpeedTyperWords = React.createClass({
	propTypes: {
		words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		writtenWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		currentWordIndex: React.PropTypes.number.isRequired,
		currentText: React.PropTypes.string.isRequired
	},
	getDefaultProps: function() {
		return {words: [], writtenWords: [], currentText: "", currentWordIndex:0};
	},
	buildSingleWords: function() {
		var single_words = [];
		var currentWordIndex = this.props.currentWordIndex;
		var currentText = this.props.currentText;
		var writtenWords = this.props.writtenWords;
		
		this.props.words.forEach(function(word, i) {
			if (i === currentWordIndex) {
				single_words.push(
					<SpeedTyperCurrentWord word={word} currentText={currentText} />	
				);
			} else {
				if (i < writtenWords.length) {
					if (word == writtenWords[i]) {
						single_words.push(
							<div className="speedTyperRightWord">
								<SpeedTyperWord word={word} />
							</div>
						);			
					} else {
						single_words.push(
							<div className="speedTyperWrongWord">
								<SpeedTyperWord word={word} />
							</div>
						);
					}
				} else {
					single_words.push(<SpeedTyperWord word={word} />);
				}
			}
		});
		return single_words;
	},
	render: function() {
		var single_words = this.buildSingleWords();
		return (
			<div className="speedTyperWords"> 
				{single_words}
			</div>
		);
	}
});