import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import * as actions from '../actions'

import HeaderContainer from '../containers/headerContainer'

import homeContainer from '../containers/homeContainer'
import loginContainer from '../containers/loginContainer'
import registerContainer from '../containers/registerContainer'
import formContainer from '../containers/formContainer'
import landingContainer from '../containers/landingContainer'
import Friends from '../components/Friends'
import PrivateRoute from '../containers/PrivateRoute'


class App extends Component {
  render() {
    return (
    <div className="container">
      <BrowserRouter>
        <div>
          <HeaderContainer />
          <Switch>
          <Route exact path="/" component={landingContainer} />
          <Route exact path="/login" component={loginContainer} />
          <Route exact path="/register" component={registerContainer} />
          <PrivateRoute exact path="/home" component={homeContainer} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute exact path="/form" component={formContainer} />
          </Switch>
        </div>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        hideProgressBar
      ></ToastContainer>
    </div>
    )
  }
}


export default connect(null, actions)(App)
