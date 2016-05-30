/*global describe it*/
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import * as Actions from '../../src/actions'
import * as ActionTypes from '../../src/constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
  it('Should create an action to increment a count', () => {
    const expectedAction = { type: ActionTypes.INCREMENT }
    expect(Actions.incrementCount()).toEqual(expectedAction)
  })

  it('Should create an action to async-increment-start', () => {
    const expectedAction = { type: ActionTypes.ASYNC_INCREMENT_START }
    expect(Actions.asyncIncrementStart()).toEqual(expectedAction)
  })

  it('Should create an action to async-increment-end', () => {
    const expectedAction = { type: ActionTypes.ASYNC_INCREMENT_END }
    expect(Actions.asyncIncrementEnd()).toEqual(expectedAction)
  })

  it('Should create an action to async-increment', (done) => {
    const store = mockStore({})

    return store.dispatch(Actions.asyncIncrement())
      .then(() => {
        const [ startAction, endAction ] = store.getActions()
        expect(startAction).toEqual({ type: ActionTypes.ASYNC_INCREMENT_START })
        expect(endAction).toEqual({ type: ActionTypes.ASYNC_INCREMENT_END })
        done()
      })
  })
})
