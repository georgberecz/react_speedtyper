"use strict";
var React = require('react');
var InputContainer;

module.exports = InputContainer = React.createClass({
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
				type="text" 
				value={this.props.text}
				ref="myInput"
				placeholder="write here"
				onChange={this.handleInputChange}
			/>
		);
	}
});
