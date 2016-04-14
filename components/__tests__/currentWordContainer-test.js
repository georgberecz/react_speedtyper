'use strict';

jest.unmock('../currentWordContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CurrentWordContainer from '../currentWordContainer';

describe('currentWordContainer', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildCurrentWordContainer = ((word, currentText) => {
    let dom = TestUtils.renderIntoDocument(
        	<CurrentWordContainer word={word} currentText={currentText} />
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "currentWordContainer")
  });

  it('sets spans according to correct letter', () => {
    let currentWordContainer = buildCurrentWordContainer("we","wo");

    let correct_span = currentWordContainer.childNodes[0];
	  expect(correct_span.textContent).toBe('w');
    expect(correct_span.className).toBe('correctLetter');

    let incorrect_span = currentWordContainer.childNodes[1];
    expect(incorrect_span.textContent).toBe('e');
    expect(incorrect_span.className).toBe('incorrectLetter');
  });
});