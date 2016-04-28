"use strict";
var React = require('react');
var Word = require("../components/Word");
var CurrentWord = require("./CurrentWord");
var Words;

module.exports = Words = React.createClass({
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
					<CurrentWord word={word} currentText={currentText} key={i}/>	
				);
			} else {
				if (i < writtenWords.length) {
					if (word == writtenWords[i]) {
						single_words.push(
							<div className="speedTyperRightWord" key={i}>
								<Word word={word} key={i}/>
							</div>
						);			
					} else {
						single_words.push(
							<div className="speedTyperWrongWord" key={i}>
								<Word word={word} key={i}/>
							</div>
						);
					}
				} else {
					single_words.push(<Word word={word} key={i}/>);
				}
			}
		});
		return single_words;
	},
	render: function() {
		return (
			<div className="speedTyperWords"> 
				{this.buildSingleWords()}
			</div>
		);
	}
});
