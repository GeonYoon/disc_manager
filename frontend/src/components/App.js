import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import HeaderContainer from '../containers/headerContainer';

import homeContainer from '../containers/homeContainer';
import loginContainer from '../containers/loginContainer';
import registerContainer from '../containers/registerContainer';
import formContainer from '../containers/formContainer';
import outputContainer from '../containers/outputContainer';
import landingContainer from '../containers/landingContainer'

import PrivateRoute from '../containers/PrivateRoute';


class App extends Component {
    // componentDidMount(){
    //     this.props.fetchUser();
    // }

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
                    <Route exact path="/home" component={homeContainer} />
                    <PrivateRoute exact path="/form" component={formContainer} />
                    <PrivateRoute exact path="/output" component={outputContainer} />
                  </Switch>
                </div>
            </BrowserRouter>
        </div>
        );
    }
}


export default connect(null, actions)(App);
