import axios from 'axios';
import { toast } from 'react-toastify';
import * as ACTION from './actionTypes';
import history from '../helpers/history';

const  userapplyforloansuccessOption= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => history.push('/signin'),
}

const  userapplyforloanfailureOption= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: () => history.push('/'),
}

export function userApplyForLoanSuccess(loan) {
  return {
    type: ACTION.USER_APPLY_FOR_LOAN_SUCCESS,
    loan,
  }
}
  
export function userApplyForLoanFailure(error) {
  return {
    type: ACTION.USER_APPLY_FOR_LOAN_FAILURE,
    error,
  }
}


export function userApplyForLoan(data) {
  return function (dispatch) {
    const { amount, tenor, } = data
    const loan = { amount, tenor, }
    const body = {
      amount: loan.amount,
      tenor: loan.tenor,
    }
    return axios.post('http://localhost:3000/api/v1/loans', body, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    },)
      .then((response) => {
        console.log(response.data.data);
        dispatch(userApplyForLoanSuccess(response));
        toast.success(response.data.message, userapplyforloansuccessOption)
      }).catch((error) => {
        if (error.response.data.message) {
          dispatch(userApplyForLoanFailure(error.response.data.message)) 
          toast.error(error.response.data.message, userapplyforloanfailureOption)
        }
        dispatch(userApplyForLoanFailure(error.response.data.error));
        toast.error(error.response.data.error, userapplyforloanfailureOption);
      })
  }
}
