import React from 'react';
import {
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import {connect} from 'react-redux';


const PrivateRouteComponent = ({component: Component, ...rest}) => {
  const {logged_in} = rest;

  return (
    <Route {...rest} render={props => (
      logged_in ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login'
        }}/>
      )
    )}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
    return {
        logged_in: state.auth.isAuthenticated,
        routeProps: {
            exact: ownProps.exact,
            path: ownProps.path
        }
    };
};

const PrivateRoute = withRouter(connect(mapStateToProps, null, null, { pure: false })(PrivateRouteComponent));
export default PrivateRoute
