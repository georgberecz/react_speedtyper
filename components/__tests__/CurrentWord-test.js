'use strict';

jest.unmock('../CurrentWord');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CurrentWord from '../CurrentWord';
import Letter from "../Letter";

describe('currentWord', () => {
  it('sets spans according to letter', () => {
    let word = "we"
    let currentText = "wo"
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <CurrentWord word={word} currentText={currentText} />
    );
    let currentWord = renderer.getRenderOutput();
    
    let correct_span = currentWord.props.children[0];
	  expect(correct_span.props).toEqual({char: 'w', className: 'correctLetter'});

    let incorrect_span = currentWord.props.children[1];
    expect(incorrect_span.props).toEqual({char: 'e', className: 'incorrectLetter'});
  });
});
