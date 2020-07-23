import axios from 'axios';
import * as ACTION from './actionTypes';
import { toast } from 'react-toastify';
import history from "../helpers/history"

const  signupOption= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => history.push('/signin'),
}

const  signinOption= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => history.push('/'),
}

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
        // toast.success(response.data.message); 
        toast.success(response.data.message, signupOption)
      }).catch((error) => {
        dispatch(userSignupFailure(error.response.data.error));
        toast.error(error.response.data.error);
      })
  }
}

export function userSigninSuccess(user) {
  localStorage.setItem('token', user.data.data.token);
  return {
    type: ACTION.USER_SIGNIN_SUCCESS,
    user,
  }
}
  
export function userSigninFailure(error) {
  return {
    type: ACTION.USER_SIGNIN_FAILURE,
    error,
  }
}


export function signinUser(data) {
  return function (dispatch) {
    const { email, password, } = data
    const user = { email, password, }
    const body = {
      email: user.email,
      password: user.password,
    }
    return axios.post('http://localhost:3000/api/v1/auth/signin', body, {
      headers: {'Content-Type': 'application/json'},
    },)
      .then((response) => {
        console.log(response)
        console.log(response.data.data);
        dispatch(userSigninSuccess(response));
        // toast.success(response.data.message); 
        toast.success(response.data.message, signinOption)
      }).catch((error) => {
        console.log(error)
        console.log(error.response)
        dispatch(userSigninFailure(error.response.data.error));
        toast.error(error.response.data.error);
      })
  }
}
