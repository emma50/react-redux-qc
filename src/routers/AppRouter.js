import React, { Suspense, lazy } from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch 
} from "react-router-dom"
import AdminRoute from './AdminRoute'
import UserRoute from './UserRoute'
import PublicRoute from './PublicRoute'

const HomePage = lazy(() => import("../components/pages/public/HomePage"));
const SignupPage = lazy(() => import("../components/pages/public/SignupPage"));
const SigninPage = lazy(() => import("../components/pages/public/SigninPage"));
const NotFoundPage = lazy(() => import("../components/pages/public/NotFoundPage"));
const ApplyForLoanPage = lazy(() => import("../components/pages/public/ApplyForLoanPage"))
const AdminDashboardPage = lazy(() => import('../components/pages/private/admin/DashboardPage'))
const UserDashboardPage = lazy(() => import('../components/pages/private/user/DashboardPage'))
const VerifyUserPage = lazy(() => import('../components/pages/private/admin/VerifyUserPage'))

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact={true}/>
          <PublicRoute path="/signup" component={SignupPage} exact={true}/>
          <PublicRoute path="/signin" component={SigninPage} exact={true}/>
          <PublicRoute path="/applyforloan" component={ApplyForLoanPage} exact={true}/>
          <AdminRoute path="/admindashboard" component={AdminDashboardPage} exact={true}/>
          <UserRoute path="/userdashboard" component={UserDashboardPage} exact={true}/>
          <AdminRoute path="/:useremail/verify" component={VerifyUserPage} exact={true}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRouter;

/**
 * const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/signup" component={SignupPage} exact={true}/>
          <Route path="/signin" component={SigninPage} exact={true}/>
          <Route path="/applyforloan" component={ApplyForLoanPage} exact={true}/>
          <Route path="/admindashboard" component={AdminDashboardPage} exact={true}/>
          <Route path="/userdashboard" component={UserDashboardPage} exact={true}/>
          <Route path="/verifyuser/:email" component={VerifyUserPage} exact={true}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
    </Router>
  )
}
 */