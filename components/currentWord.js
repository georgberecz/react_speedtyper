"user strict";
var React = require('react');
var Letter = require("../components/Letter");
var CurrentWord;


module.exports = CurrentWord = React.createClass ({
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
					singleCharacters.push(<Letter className="correctLetter" char={word.charAt(i)} key={i} />)
				} else {
					singleCharacters.push(<Letter className="incorrectLetter" char={word.charAt(i)} key={i} />)
				}
			} else {
				singleCharacters.push(<Letter char={word.charAt(i)} key={i}/>)
			}

		}
		return singleCharacters;
	},
	render: function() {
		var singleCharacters = this.buildSingleCharacters();
		return(
			<div className="currentWord">
				{singleCharacters}
			</div>
		);
	}

});
