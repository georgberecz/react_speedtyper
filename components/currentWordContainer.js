"user strict"
var React = require('react');
var Letter = require("./letter");
var CurrentWordContainer;


module.exports = CurrentWordContainer = React.createClass ({
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
					singleCharacters.push(<Letter className="correctLetter" char={word.charAt(i)} />)
				} else {
					singleCharacters.push(<Letter className="incorrectLetter" char={word.charAt(i)} />)
				}
			} else {
				singleCharacters.push(<Letter char={word.charAt(i)} />)
			}

		}
		return singleCharacters;
	},
	render: function() {
		var singleCharacters = this.buildSingleCharacters();
		return(
			<div className="currentWordContainer">
				{singleCharacters}
			</div>
		);
	}

});


