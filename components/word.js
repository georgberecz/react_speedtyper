"use strict";
var React = require('react');
var Word;


module.exports = Word= React.createClass ({
	propTypes: {
		word: React.PropTypes.string.isRequired,
	},
	render: function() {
		return(
			<div className="word">
				{this.props.word}
			</div>
		);
	}

});


