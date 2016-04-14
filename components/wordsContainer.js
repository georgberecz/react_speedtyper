"use strict";
var React = require('react');
var Word = require("./word");
var CurrentWordContainer = require("./currentWordContainer");
var WordsContainer;

module.exports = WordsContainer = React.createClass({
	propTypes: {
		words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		writtenWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		currentText: React.PropTypes.string.isRequired
	},
	getDefaultProps: function() {
		return {words: [], writtenWords: [], currentText: ""};
	},
	buildSingleWords: function() {
		var single_words = [];
		var currentText = this.props.currentText;
		var writtenWords = this.props.writtenWords;
		var currentWordIndex = writtenWords.length;
		
		this.props.words.forEach(function(word, i) {
			if (i === currentWordIndex) {
				single_words.push(
					<CurrentWordContainer word={word} currentText={currentText} />	
				);
			} else {
				if (i < writtenWords.length) {
					if (word == writtenWords[i]) {
						single_words.push(
							<div className="speedTyperRightWord">
								<Word word={word} />
							</div>
						);			
					} else {
						single_words.push(
							<div className="speedTyperWrongWord">
								<Word word={word} />
							</div>
						);
					}
				} else {
					single_words.push(<Word word={word} />);
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