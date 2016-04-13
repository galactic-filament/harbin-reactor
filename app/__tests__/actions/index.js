/*global describe it*/

import expect from 'expect'
import * as Actions from '../../src/actions'
import * as ActionTypes from '../../src/constants/ActionTypes'

describe('Actions', () => {
  it('Should create an action to increment a count', () => {
    const expectedAction = { type: ActionTypes.INCREMENT }
    expect(Actions.incrementCount()).toEqual(expectedAction)
  })
})
