"use strict";
var React = require('react');
var Input;

module.exports = Input = React.createClass({
	propTypes: {
		onInputChange: React.PropTypes.func.isRequired,
		text: React.PropTypes.string.isRequired,
	},
	handleInputChange: function(e) {
		this.props.onInputChange(e.target.value);
	},
	render: function() {
		return (
			<input 
				className="input"
				type="text" 
				value={this.props.text}
				placeholder="write here"
				onChange={this.handleInputChange}
			/>
		);
	}
});
