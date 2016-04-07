"user strict"
var React = require('react');
var SpeedTyperWord;


module.exports = SpeedTyperWord= React.createClass ({
	propTypes: {
		word: React.PropTypes.string.isRequired,
	},
	render: function() {
		return(
			<div className="speedTyperWord">
				{this.props.word}
			</div>
		);
	}

});


