import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.map((user) => user.token));
  //const isAdmin = useSelector((state) => state.auth.map((user) => user.id === 1));
  const isAdmin = !!localStorage.getItem("id")

  const auth = (props) => {
    return isAuthenticated && isAdmin ? (
      <Redirect to="/admindashboard"/>   
    ) ? isAuthenticated && !(isAdmin) : (
      <Redirect to="/userdashboard"/>   
    ) : (
      <Component {...props}/>
    )
  }

  return (
    <Route {...rest} component={auth}/> 
  )
}

export default PublicRoute

// localStorage.getItem('token').split('').includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFkbWluIjp0cnVlLCJ1ZW1haWwiOiJhZG1pbkBxdWlja2NyZWRpdC5jb20iLCJmbmFtZSI6IkRhbmllbCIsImxuYW1lIjoiVWZlbGkiLCJpYXQiOjE1OTc4NDY')
// str.substring(0, 176)