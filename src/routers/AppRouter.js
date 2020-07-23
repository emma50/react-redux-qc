import React, { Suspense, lazy } from 'react';
import { 
  Router, 
  Route, 
  Switch 
} from "react-router-dom"
import history from "../helpers/history"
const HomePage = lazy(() => import("../components/pages/public/HomePage"))
const SignupPage = lazy(() => import("../components/pages/public/SignupPage"))
const SigninPage = lazy(() => import("../components/pages/public/SigninPage"))

const AppRouter = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/signup" component={SignupPage} exact={true}/>
          <Route path="/signin" component={SigninPage} exact={true}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRouter;