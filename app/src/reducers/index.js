import { combineReducers } from 'redux'
import { INCREMENT, ASYNC_INCREMENT_START, ASYNC_INCREMENT_END } from '../constants/ActionTypes'

const initialCountState = {
  value: 0,
  isAsyncCounting: false
}

function count(state = initialCountState, action) {
  switch(action.type) {
  case INCREMENT:
    return Object.assign({}, state, {
      value: state.value + 1
    })
  case ASYNC_INCREMENT_START:
    return Object.assign({}, state, {
      isAsyncCounting: true
    })
  case ASYNC_INCREMENT_END:
    return Object.assign({}, state, {
      isAsyncCounting: false
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  count
})

export default rootReducer
