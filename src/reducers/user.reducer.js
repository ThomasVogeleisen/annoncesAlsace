import { TEST } from '../actions/user.actions'

const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testage: action.payload,
      }
    default:
      return state
  }
}
