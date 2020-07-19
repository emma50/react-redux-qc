import * as ACTIONS from '../actions/actionTypes';
 
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_SIGNUP_SUCCESS : 
      return [
        ...state,
        action.user
      ]
    case ACTIONS.USER_SIGNUP_FAILURE : 
      return [
        ...state,
        action.error
      ]
    default:
      return state
  }
}