import * as actions from '../../actions'
jest.disableAutomock();

describe('speedTyperApp actions', () => {
  it('speedTyperApp should create INPUT_CHANGE action', () => {
    expect(actions.handleInputChange('blub')).toEqual({
      type: 'INPUT_CHANGE',
      payload: {text: 'blub'}
    })
  });

  it('speedTyperApp should create GAME_START action', () => {
    var time = Date.now();
    let dispatch = sinon.stub()
    
    expect(actions.startGame()).toEqual({
      type: 'GAME_START',
      payload: {time: time}
    })
  });

  it('speedTyperApp should create GAME_STOP action', () => {
    expect(actions.stopGame()).toEqual({
      type: 'GAME_STOP'
    })
  });

  it('speedTyperApp should create INPUT_CHANGE action', () => {
    expect(actions.updateGame()).toEqual({
      type: 'UPDATE_GAME'
    })
  });

  it('speedTyperApp should create SET_WORDS action', () => {
    expect(actions.setWords(["blub", "blab"])).toEqual({
      type: 'SET_WORDS',
      payload: {words: ["blub", "blab"]}
    })
  });

});