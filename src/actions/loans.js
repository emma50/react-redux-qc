import axios from 'axios';
import { toast } from 'react-toastify';
import * as ACTION from './actionTypes';
import location from '../helpers/location';

const userapplyforloansuccessOption= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: location('http://localhost:3001/'),
}

const userapplyforloanfailureOption= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  onClose: location('http://localhost:3001/'),
}

export const userApplyForLoanSuccess = (loan) => ({
  type: ACTION.USER_APPLY_FOR_LOAN_SUCCESS,
  loan,
})
  
export const userApplyForLoanFailure = (error) => ({
  type: ACTION.USER_APPLY_FOR_LOAN_FAILURE,
  error,
})

export const userApplyForLoan = (data) => {
  return (dispatch) => {
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
        dispatch(userApplyForLoanSuccess(response.data));
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
