import authReducer from '../../reducers/auth';
import * as types from '../../actions/actionTypes';

const error = 'some error message';

describe('signup reducer', () => {
  const user = {
    token: 'dfhdhgdjkfotestyywuwsxcvbcchryu475yhet35hw8jwy3462jr7er',
    id: 4,
    firstname: 'Jonathannathan',
    lastname: 'Jonathannathan',
    email: 'email@email.com'
  };

  test('should setup default state', () => {
    const defaultState = []
        
    const action = { type: "@@INIT" }  // @@INIT is the default action dispatched by redux  
    const state = authReducer(undefined, action)  
    expect(state).toEqual(defaultState)
  })

  test('should signup a user state', () => {
    const action = {
      type: types.USER_SIGNUP_SUCCESS,
      user,
    } 

    const state = authReducer([], action);
    expect(state).toEqual([user])
  })

  test('should signup a user state', () => {
    const action = {
      type: types.USER_SIGNUP_FAILURE,
      error,
    }; 

    const state = authReducer([], action);
    expect(state).toEqual([error]);
  })
})

describe('signin reducer', () => {
  const user = {
    token: 'dfhdhgdjkfotestyywuwsxcvbcchryu475yhet35hw8jwy3462jr7er',
    id: 4,
    firstname: 'Jonathannathan',
    lastname: 'Jonathannathan',
    email: 'email@email.com',
    mobileno: 12345678910,
  };

  test('should signin a user state', () => {
    const action = {
      type: types.USER_SIGNIN_SUCCESS,
      user,
    }; 

    const state = authReducer([], action);
    expect(state).toEqual([user]);
  })

  test('should signin a user state', () => {
    const action = {
      type: types.USER_SIGNIN_FAILURE,
      error,
    }; 

    const state = authReducer([], action);
    expect(state).toEqual([error]);
  })
})

