import * as types from '../constants/ActionTypes'

export function incrementCount() {
  return { type: types.INCREMENT }
}

export function asyncIncrementStart() {
  return { type: types.ASYNC_INCREMENT_START }
}

export function asyncIncrementEnd() {
  return { type: types.ASYNC_INCREMENT_END }
}

export function asyncIncrement() {
  return dispatch => {
    dispatch(asyncIncrementStart())
    return (new Promise(resolve => resolve())).then(() => dispatch(asyncIncrementEnd()))
  }
}
