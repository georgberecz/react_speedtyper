import * as actions from '../../actions'
jest.disableAutomock();

describe('speedTyperApp actions', () => {
  it('speedTyperApp should create INPUT_CHANGE action', () => {
    expect(actions.handleInputChange('blub')).toEqual({
      type: 'INPUT_CHANGE',
      payload: 'blub'
    })
  })
})