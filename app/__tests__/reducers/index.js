/*global describe it*/

import expect from 'expect'
import * as ActionTypes from '../../src/constants/ActionTypes'
import rootReducer from '../../src/reducers'

describe('Root reducer', () => {
  const initialState = {
    count: {
      value: 0,
      isAsyncCounting: false
    }
  }
  
  it('Should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  })
  it('Should handle INCREMENT', () => {
    expect(rootReducer(initialState, {
      type: ActionTypes.INCREMENT
    }).count).toEqual({
      value: 1,
      isAsyncCounting: false
    })
  })
})
