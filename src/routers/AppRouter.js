import React, { Suspense, lazy } from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch 
} from "react-router-dom"
const HomePage = lazy(() => import("../components/pages/public/HomePage"));
const SignupPage = lazy(() => import("../components/pages/public/SignupPage"));
const SigninPage = lazy(() => import("../components/pages/public/SigninPage"));
const ApplyForLoanPage = lazy(() => import("../components/pages/public/ApplyForLoanPage"))

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/signup" component={SignupPage} exact={true}/>
          <Route path="/signin" component={SigninPage} exact={true}/>
          <Route path="/applyforloan" component={ApplyForLoanPage} exact={true}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRouter;