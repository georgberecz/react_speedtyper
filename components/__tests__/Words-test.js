'use strict';

jest.unmock('../Words');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Words from "../Words";
import Word from "../Word";
import CurrentWord from "../CurrentWord";
import Letter from "../Letter";

Word.mockImplementation(() => <div />);
CurrentWord.mockImplementation(() => <div />);
Letter.mockImplementation(() => <div />);

describe('Words', () => {
	
	it('renders words and letters if no input', () => {
	    let givenWords = ["a", "b"]
	    let writtenWords = []
	    let currentText = ""

	    let renderer = TestUtils.createRenderer();
	    renderer.render(
	      <Words words={givenWords} currentText={currentText} writtenWords={writtenWords} />
	    );
	    let words = renderer.getRenderOutput();

	    let word1 = words.props.children[0];
	    expect(word1.props).toEqual({currentText:"", word: "a"});

	    let word2 = words.props.children[1]
	    expect(word2.props).toEqual({word: "b"});
	    
  	});

  	it('renders words with correct colors depending on input', () => {
	    let givenWords = ["a", "b", "abc", "d"]
	    let writtenWords = ["a", "c"]
	    let currentText = "ac"

	    let renderer = TestUtils.createRenderer();
	    renderer.render(
	      <Words words={givenWords} currentText={currentText} writtenWords={writtenWords} />
	    );
	    let words = renderer.getRenderOutput();

	    let correctWord = words.props.children[0];
	    expect(correctWord.props.children.props).toEqual({word: "a"});
	    expect(correctWord.props.className).toEqual("speedTyperRightWord");

		let incorrectWord = words.props.children[1];
	    expect(incorrectWord.props.children.props).toEqual({word: "b"});
	    expect(incorrectWord.props.className).toEqual("speedTyperWrongWord");

	    let letters = words.props.children[2];
	    expect(letters.props).toEqual({currentText:"ac", word: "abc"});

	    
  	});

});