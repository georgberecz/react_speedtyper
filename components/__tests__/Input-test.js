'use strict';

jest.unmock('../Input');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from "../Input";

describe('Input', () => {
  var buildInput = ((onInputChange, text, gameStarted) => {
	return TestUtils.renderIntoDocument(
	  <Input onInputChange={onInputChange} text={text} gameStarted={gameStarted} />
	);
  });

  it('calculates calls onUserInput prop on change', () => {
	let onInputChange = jest.genMockFunction();
	let typingContainer = buildInput(onInputChange, "hello", true);
	let textInput = TestUtils.findRenderedDOMComponentWithTag(typingContainer, 'input');
	TestUtils.Simulate.change(textInput);

	expect(onInputChange.mock.calls[0][0]).toEqual("hello");
  });
});