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
    case ACTIONS.USER_SIGNIN_SUCCESS : 
      return [
        ...state,
        action.user
      ]
    case ACTIONS.USER_SIGNIN_FAILURE : 
      return [
        ...state,
        action.error
      ]
    case ACTIONS.ADMIN_VERIFY_USER_SUCCESS: 
      return state.map((user) => {
        if (user.email === action.email) {
            return {
                ...user,
                ...action.updates
            }
        } else {
            return user
        }
      })
    case ACTIONS.ADMIN_VERIFY_USER_FAILURE: 
      return [
        ...state,
        action.error
      ]
    default:
      return state
  }
}