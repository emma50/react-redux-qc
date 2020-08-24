// import axios from 'axios';
import * as ACTION from './actionTypes';
import { toast } from 'react-toastify';
import location from '../helpers/location';
import request from '../helpers/request';

const baseURL = 'http://localhost:3000/api/v1';
const signupURL = `${baseURL}/auth/signup`;
const signinURL = `${baseURL}/auth/signin`;
const options = {
  headers: {'Content-Type': 'application/json'},
}
const authOptions = {
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': localStorage.getItem('token'),
  },
}

const signupOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => location('http://localhost:3001/signin'),
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
  onClose: () => {
    if (localStorage.getItem('id') === '1') {
      location('http://localhost:3001/admindashboard')
    } else {
      location('http://localhost:3001/userdashboard')
    }
  }
}

const verifiedOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => location('http://localhost:3001/admindashboard')
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
    request.post(signupURL, body, options)
      .then((response) => {
        console.log(response)
        console.log(response.data);
        if (response.data.data.id === 1) {
          localStorage.setItem('id', response.data.data.id);
          dispatch(userSignupSuccess(response.data.data)); 
          toast.success(response.data.message, signupOption)
        } else {
          dispatch(userSignupSuccess(response.data.data)); 
          toast.success(response.data.message, signupOption)
        }
      }).catch((error) => {
        console.log(error)
        console.log(error.response)
        if (error.response.data.message) {
          dispatch(userSignupFailure(error.response.data.message));
          toast.error(error.response.data.message, failureOption);
        } else {
          dispatch(userSignupFailure(error.response.data.error));
          toast.error(error.response.data.error, failureOption);
        }
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
    request.post(signinURL, body, options)
      .then((response) => {
        console.log(response.data.message)
        if (response.data.data.id === 1) {
          localStorage.setItem('id', response.data.data.id);
          dispatch(userSigninSuccess(response.data.data)); 
          toast.success(response.data.message, signinOption)
        } else {
          dispatch(userSigninSuccess(response.data.data)); 
          toast.success(response.data.message, signinOption)
        }
      }).catch((error) => {
        console.log(error.response.data.message)
        if (error.response.data.message) {
          dispatch(userSigninFailure(error.response.data.message));
          toast.error(error.response.data.message, failureOption);
        } else {
          dispatch(userSigninFailure(error.response.data.error));
          toast.error(error.response.data.error, failureOption);
        }  
      })
  }
}

export const adminVerifyUserSuccess = (email, updates) => ({
  type: ACTION.ADMIN_VERIFY_USER_SUCCESS,
  email,
  updates
})
  
export const adminVerifyUserFailure = (error) => ({
  type: ACTION.ADMIN_VERIFY_USER_FAILURE,
  error,
})

export const adminVerifyUser = (useremail, updates) => {
  return (dispatch, getState) => {
    // const useremail = getState().auth.email
    // console.log(useremail)
    const body = {
      status: updates,
    }
    request.patch(`${baseURL}/users/${useremail}/verify`, body, authOptions)
      .then((response) => {
        dispatch(adminVerifyUserSuccess(response.data.data)); 
        toast.success(response.data.message, verifiedOption)
      }).catch((error) => {
        if (error.response.data.message) {
          dispatch(adminVerifyUserFailure(error.response.data.message));
          toast.error(error.response.data.message, failureOption);
        } else {
          dispatch(adminVerifyUserFailure(error.response.data.error));
          toast.error(error.response.data.error, failureOption);
        }  
      })
  }
}