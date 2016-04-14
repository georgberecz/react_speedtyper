'use strict';

jest.unmock('../wordsContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WordsContainer from "../wordsContainer";
import Word from "../word";
import CurrentWordContainer from "../currentWordContainer";
import Letter from "../letter";

Word.mockImplementation(() => <div />);
CurrentWordContainer.mockImplementation(() => <div />);
Letter.mockImplementation(() => <div />);

describe('WordsContainer', () => {
	
	it('renders words and letters if no input', () => {
	    let words = ["a", "b"]
	    let writtenWords = []
	    let currentText = ""

	    let renderer = TestUtils.createRenderer();
	    renderer.render(
	      <WordsContainer words={words} currentText={currentText} writtenWords={writtenWords} />
	    );
	    let wordsContainer = renderer.getRenderOutput();

	    let word1 = wordsContainer.props.children[0];
	    expect(word1.props).toEqual({currentText:"", word: "a"});

	    let word2 = wordsContainer.props.children[1]
	    expect(word2.props).toEqual({word: "b"});
	    
  	});

  	it('renders words with correct colors depending on input', () => {
	    let words = ["a", "b", "abc", "d"]
	    let writtenWords = ["a", "c"]
	    let currentText = "ac"

	    let renderer = TestUtils.createRenderer();
	    renderer.render(
	      <WordsContainer words={words} currentText={currentText} writtenWords={writtenWords} />
	    );
	    let wordsContainer = renderer.getRenderOutput();

	    let correctWord = wordsContainer.props.children[0];
	    expect(correctWord.props.children.props).toEqual({word: "a"});
	    expect(correctWord.props.className).toEqual("speedTyperRightWord");

		let incorrectWord = wordsContainer.props.children[1];
	    expect(incorrectWord.props.children.props).toEqual({word: "b"});
	    expect(incorrectWord.props.className).toEqual("speedTyperWrongWord");

	    let letters = wordsContainer.props.children[2];
	    expect(letters.props).toEqual({currentText:"ac", word: "abc"});

	    
  	});

});