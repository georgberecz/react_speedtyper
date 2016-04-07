"user strict"
var React = require('react');
var SpeedTyperCurrentWord;


module.exports = SpeedTyperCurrentWord= React.createClass ({
	propTypes: {
		word: React.PropTypes.string.isRequired,
		currentText: React.PropTypes.string.isRequired
	},
	buildSingleCharacters: function() {
		var singleCharacters = [];
		var word = this.props.word;
		var currentText = this.props.currentText;
		for (var i = 0; i < word.length; i++) {
			if (i < currentText.length) {
				if (word.charAt(i) == currentText.charAt(i)) {
					singleCharacters.push(<span className="correctLetter">{word.charAt(i)}</span>)
				} else {
					singleCharacters.push(<span className="incorrectLetter">{word.charAt(i)}</span>)
				}
			} else {
				singleCharacters.push(<span>{word.charAt(i)}</span>)
			}

		}
		return singleCharacters;
	},
	render: function() {
		var singleCharacters = this.buildSingleCharacters();
		return(
			<div className="speedTyperCurrentWord">
				{singleCharacters}
			</div>
		);
	}

});


