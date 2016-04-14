'use strict';

jest.unmock('../inputContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputContainer from "../inputContainer";

describe('InputContainer', () => {
  var buildInputContainer = ((onInputChange, text) => {
	return TestUtils.renderIntoDocument(
	  <InputContainer onInputChange={onInputChange} text={text} />
	);
  });

  it('calculates calls onUserInput prop on change', () => {
	let onInputChange = jest.genMockFunction();
	let typingContainer = buildInputContainer(onInputChange, "hello");
	let textInput = TestUtils.findRenderedDOMComponentWithTag(typingContainer, 'input');
	TestUtils.Simulate.change(textInput);

	expect(onInputChange.mock.calls[0][0]).toEqual("hello");
  });
});