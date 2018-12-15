import React, {Component} from 'react';
import {connect} from 'react-redux';
import Register from '../components/Register';
import {register} from '../actions';
import { withRouter } from 'react-router-dom';


class registerContainer extends Component {
  render() {
    const { handleRegister, auth,errorDetail,error } = this.props;
    return <Register handleRegister={handleRegister}
                     auth={auth}
                     errorDetail={errorDetail}
                     error = {error}
            />;
  }
}

const mapStateToProps = ({auth}) => {
    return {
      auth : auth.isAuthenticated,
      error : auth.error,
      errorDetail : auth.errorDetail
    }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRegister: (username, password, password2, email) => {
    dispatch(register(username,
                      password,
                      password2,
                      email,
                      ownProps.history));
  }
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(registerContainer));
