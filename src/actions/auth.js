// import axios from 'axios';
import * as ACTION from './actionTypes';
import { toast } from 'react-toastify';
import location from '../helpers/location';
import request from '../helpers/request';

const baseURL = 'http://localhost:3000/api/v1';
const signupURL = `${baseURL}/auth/signup`;
const signinURL = `${baseURL}/auth/signin`;
const headers = {
  headers: {'Content-Type': 'application/json'},
}

const authHeaders = {
  headers: {'Content-Type': 'application/json'},
  'x-auth-token': localStorage.getItem('token'),
}

const signupOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  // onClose: () => location('http://localhost:3001/signin'),
}


const failureOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const signinOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => location('http://localhost:3001/'),
}

const verifiedOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => location('http://localhost:3001/admindashboard'),
}

export const userSignupSuccess = (user) => {
  localStorage.setItem('token', user.token);
  return {
    type: ACTION.USER_SIGNUP_SUCCESS,
    user,
  }
}
  
export const userSignupFailure = (error) => ({
  type: ACTION.USER_SIGNUP_FAILURE,
  error,
})


export const signupUser = (data) => {
  return (dispatch) => {
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
    request.post(signupURL, body, headers)
      .then((response) => {
        console.log(response)
        console.log(response.data);
        dispatch(userSignupSuccess(response.data.data)); 
        toast.success(response.data.message, signupOption)
      }).catch((error) => {
        console.log(error)
        console.log(error.response)
        if (error.response.data.message) {
          dispatch(userSignupFailure(error.response.data.message));
          toast.error(error.response.data.message, failureOption);
        }
        dispatch(userSignupFailure(error.response.data.error));
        toast.error(error.response.data.error, failureOption);
      })
  }
}

export const userSigninSuccess = (user) => {
  localStorage.setItem('token', user.token);
  return {
    type: ACTION.USER_SIGNIN_SUCCESS,
    user,
  }
}
  
export const userSigninFailure = (error) => ({
  type: ACTION.USER_SIGNIN_FAILURE,
  error,
})


export const signinUser = (data) => {
  return (dispatch) => {
    const { email, password, } = data
    const user = { email, password, }
    const body = {
      email: user.email,
      password: user.password,
    }
    request.post(signinURL, body, headers)
      .then((response) => {
        dispatch(userSigninSuccess(response.data.data)); 
        toast.success(response.data.message, signinOption)
      }).catch((error) => {
        if (error.response.data.message) {
          dispatch(userSigninFailure(error.response.data.message));
          toast.error(error.response.data.message, failureOption);
        }
        dispatch(userSigninFailure(error.response.data.error));
        toast.error(error.response.data.error, failureOption);
      })
  }
}

export const adminVerifyUserSuccess = (user) => ({
  type: ACTION.ADMIN_VERIFY_USER_SUCCESS,
  user,
})
  
export const adminVerifyUserFailure = (error) => ({
  type: ACTION.ADMIN_VERIFY_USER_FAILURE,
  error,
})

export const adminVerifyUser = (data) => {
  return (dispatch, getState) => {
    const useremail = getState().auth.email
    const { status, } = data
    const user = { status, }
    const body = {
      status: user.status,
    }
    request.post(`${baseURL}/users/${useremail}/verify`, body, authHeaders)
      .then((response) => {
        dispatch(adminVerifyUserSuccess(response.data.data)); 
        toast.success(response.data.message, verifiedOption)
      }).catch((error) => {
        if (error.response.data.message) {
          dispatch(adminVerifyUserFailure(error.response.data.message));
          toast.error(error.response.data.message, failureOption);
        }
        dispatch(adminVerifyUserFailure(error.response.data.error));
        toast.error(error.response.data.error, failureOption);
      })
  }
}