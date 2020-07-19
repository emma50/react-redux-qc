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
    const { firstname, lastname, email, password, address, mobileno, } = data
    const user = { firstname, lastname, email, password, address, mobileno, }
    const body = {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      password: user.password,
      address: user.address,
      mobileno: user.mobileno,
    }
    return axios.post('http://localhost:3000/api/v1/auth/signup', body, {
      headers: {'Content-Type': 'application/json'},
    },)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.data);
        dispatch(userSignupSuccess(response));
        toast.success(response.data.message); 
      }).catch((error) => {
        console.log(error.message)
        dispatch(userSignupFailure(error.message));
        toast.success(error.message);
      })
  }
}
