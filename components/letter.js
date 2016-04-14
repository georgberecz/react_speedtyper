"user strict";
var React = require('react');
var Letter;


module.exports = Letter= React.createClass ({
	getDefaultProps: function() {
		return {char: "", className:""}
	},
	propTypes: {
		char: React.PropTypes.string.isRequired,
		className: React.PropTypes.string
	},
	render: function() {
		return(
			<span className={'letter ' + this.props.className}>
				{this.props.char}
			</span>
		);
	}

});
