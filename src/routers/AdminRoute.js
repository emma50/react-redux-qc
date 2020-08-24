import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.map((user) => user.token));
  // const isAdmin = useSelector((state) => state.auth.map((user) => user.id === 1));
  const isAdmin = !!localStorage.getItem('id');
  const auth = (props) => {
    return isAuthenticated && isAdmin ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/"/>
    )
  }

  return (
    <Route {...rest} component={auth}/> 
  )
}

export default AdminRoute