'use strict';

jest.unmock('../speedTyperCurrentWord');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyperCurrentWord from '../speedTyperCurrentWord';

describe('speedTyperCurrentWord', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildSpeedTyperCurrentWord = ((word, currentText) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<SpeedTyperCurrentWord word={word} currentText={currentText} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "speedTyperCurrentWord")
  });

  it('sets spans according to correct letter', () => {
    let speedTyperCurrentWord = buildSpeedTyperCurrentWord("we","wo");

    let correct_span = speedTyperCurrentWord.childNodes[0];
	  expect(correct_span.textContent).toBe('w');
    expect(correct_span.className).toBe('correctLetter');

    let incorrect_span = speedTyperCurrentWord.childNodes[1];
    expect(incorrect_span.textContent).toBe('e');
    expect(incorrect_span.className).toBe('incorrectLetter');
  });
});