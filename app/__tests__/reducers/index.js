/*global describe it expect*/

import * as ActionTypes from '../../src/constants/ActionTypes'
import rootReducer from '../../src/reducers'

describe('Root reducer', () => {
  it('Should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({ count: 0 })
  })
  it('Should handle INCREMENT', () => {
    expect(rootReducer({ count: 0 }, {
      type: ActionTypes.INCREMENT
    })).toEqual({
      count: 1
    })
  })
})
