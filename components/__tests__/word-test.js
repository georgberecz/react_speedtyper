'use strict';

jest.unmock('../word');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Word from '../word';

describe('word', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildWord = ((word) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<Word word={word} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "word")
  });

  it('sets word', () => {
    let word = buildWord("some text");
    let text = word.childNodes[0]
	expect(text.textContent).toEqual('some text');
  });
});