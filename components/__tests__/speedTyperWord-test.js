'use strict';

jest.unmock('../speedTyperWord');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyperWord from '../speedTyperWord';

describe('speedTyperWord', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildSpeedTyperWord = ((word) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<SpeedTyperWord word={word} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "speedTyperWord")
  });

  it('sets word', () => {
    let speedTyperWord = buildSpeedTyperWord("some text");
    let text = speedTyperWord.childNodes[0]
	expect(text.textContent).toEqual('some text');
  });
});