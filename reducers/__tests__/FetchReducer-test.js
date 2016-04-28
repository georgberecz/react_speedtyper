'use strict';

jest.disableAutomock();
import reducer from '../FetchReducer';

describe('FetchReducer reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        inProgress: false
    });
  });

    it('should handle WORDS_FETCH_REQUESTED', () => {
    expect(reducer({inProgress: false}, {
    	type: "WORDS_FETCH_REQUESTED"
    })).toEqual({
        inProgress: true
    });
  });

  it('should handle WORDS_FETCH_STOPPED', () => {
    expect(reducer({inProgress: true}, {
    	type: "WORDS_FETCH_STOPPED"
    })).toEqual({
        inProgress: false
    });
  });
});