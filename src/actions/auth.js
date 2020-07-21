import axios from 'axios';
import * as ACTION from './actionTypes';
import { toast } from 'react-toastify';

export function userSignupSuccess(user) {
  localStorage.setItem('token', user.data.data.token);
  return {
    type: ACTION.USER_SIGNUP_SUCCESS,
    user,
  }
}
  
export function userSignupFailure(error) {
  return {
    type: ACTION.USER_SIGNUP_FAILURE,
    error,
  }
}


export function signupUser(data) {
  return function (dispatch) {
    const { firstName, lastName, email, password, address, mobileno, } = data
    const user = { firstName, lastName, email, password, address, mobileno, }
    const body = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      address: user.address,
      mobileno: user.mobileno,
    }
    return axios.post('http://localhost:3000/api/v1/auth/signup', body, {
      headers: {'Content-Type': 'application/json'},
    },)
      .then((response) => {
        console.log(response.data.data);
        dispatch(userSignupSuccess(response));
        toast.success(response.data.message); 
      }).catch((error) => {
        dispatch(userSignupFailure(error.response.data.error));
        toast.success(error.response.data.error);
      })
  }
}
