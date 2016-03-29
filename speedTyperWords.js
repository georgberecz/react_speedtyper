"use strict";
var React = require('react');
var SpeedTyperWords;

module.exports = SpeedTyperWords = React.createClass({
	propTypes: {
		words: React.PropTypes.array.isRequired,
	},
	render: function() {
		var single_words = [];
		this.props.words.forEach(function(word) {
			single_words.push(<span>{word} </span>);
		});
		return (
			<div className="speedTyperWords"> 
				{single_words}
			</div>
		);
	}
});