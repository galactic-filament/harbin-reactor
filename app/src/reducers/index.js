import { INCREMENT } from '../constants/ActionTypes'

const initialState = {
  count: 0
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case INCREMENT:
    state.count += 1
    return state
  default:
    return state
  }
}

export default rootReducer
