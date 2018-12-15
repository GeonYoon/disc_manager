import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';
import {login} from '../actions';
import { withRouter } from 'react-router-dom';


class loginContainer extends Component {
  render() {
    const { handleLogin, auth,error } = this.props;
    return <Login handleLogin={handleLogin} auth={auth} error={error}/>;
  }
}

const mapStateToProps = ({auth}) => {
    return {
      auth : auth.isAuthenticated,
      error : auth.error
    }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogin: (username, password) => {
    dispatch(login(username, password,ownProps.history));
  }
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(loginContainer));
