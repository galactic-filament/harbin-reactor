import { INCREMENT } from '../constants/ActionTypes'

const initialState = {
  count: 0
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case INCREMENT:
    return Object.assign({}, state, {
      count: state.count + 1
    })
  default:
    return state
  }
}

export default rootReducer
