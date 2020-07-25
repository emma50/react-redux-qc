import * as ACTIONS from '../actions/actionTypes';
 
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_APPLY_FOR_LOAN_SUCCESS : 
      return [
        ...state,
        action.loan
      ]
    case ACTIONS.USER_APPLY_FOR_LOAN_FAILURE : 
      return [
        ...state,
        action.error
      ]
    default:
      return state
  }
}