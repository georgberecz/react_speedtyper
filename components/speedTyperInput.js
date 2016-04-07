"use strict";
var React = require('react');
var SpeedTyperInput;

module.exports = SpeedTyperInput = React.createClass({
	propTypes: {
		onInputChange: React.PropTypes.func.isRequired,
	},
	getInitialState: function() {
		return {text: ''};
	},
	handleInputChange: function(e) {
		this.setState({text: e.target.value});
		var text = this.refs.myInput.value;
		this.props.onInputChange({text: text});
		if (text.substr(text.length-1) == " ") {
			this.setState({text: ""});
		}
	},
	render: function() {
		return (
			<input 
				type="text" 
				value={this.state.text}
				ref="myInput"
				placeholder="write here"
				onChange={this.handleInputChange}
			/>
		);
	}
});
