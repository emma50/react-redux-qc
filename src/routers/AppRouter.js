import React, { Suspense, lazy } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom"
import history from "../helpers/history"
const HomePage = lazy(() => import("../components/pages/public/HomePage"));
const SignupPage = lazy(() => import("../components/pages/public/SignupPage"));
const SigninPage = lazy(() => import("../components/pages/public/SigninPage"));
const ApplyForLoanPage = lazy(() => import("../components/pages/public/ApplyForLoanPage"))

const AppRouter = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/signin" component={SigninPage}/>
          <Route path="/applyforloan" component={ApplyForLoanPage}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRouter;