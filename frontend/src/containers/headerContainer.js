import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../actions';
import { withRouter } from 'react-router-dom';


class headerContainer extends Component {
  render() {
    const { handleLogout, auth } = this.props;
    return <Header handleLogout={handleLogout}  auth={auth}/>;
  }
}

const mapStateToProps = ({auth}) => {
    return {auth : auth.isAuthenticated}
};
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  }
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(headerContainer));
