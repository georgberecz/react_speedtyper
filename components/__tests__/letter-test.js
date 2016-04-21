"use strict";

jest.unmock('../Letter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../Letter';

describe('letter', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildLetter = ((char, className) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<Letter char={char} className={className} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
  });

  it('sets letter and class', () => {
    let letter = buildLetter("l", "correctLetter");
	expect(letter.className).toEqual("letter correctLetter");
	expect(letter.textContent).toEqual("l");
  });
});