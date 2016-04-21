'use strict';

jest.unmock('../CurrentWord');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CurrentWord from '../CurrentWord';
import Letter from "../Letter";

describe('currentWord', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildCurrentWord = ((word, currentText) => {
    let dom = TestUtils.renderIntoDocument(
      <CurrentWord word={word} currentText={currentText} />    
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "currentWord")
  });

  it('sets spans according to letter', () => {
    let currentWord = buildCurrentWord("we","wo");
    
    let correct_span = currentWord.props.children[0];

	  expect(correct_span.props.char).toBe('w');
    expect(correct_span.props.className).toBe('correctLetter');

    let incorrect_span = currentWord.props.children[1];
    expect(incorrect_span.props.char).toBe('e');
    expect(incorrect_span.props.className).toBe('incorrectLetter');
  });
});