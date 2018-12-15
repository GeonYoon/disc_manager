import React, {Component} from 'react';
import {connect} from 'react-redux';
import Landing from '../components/Landing';
import { withRouter } from 'react-router-dom';


class landingContainer extends Component {
  render() {
    const { auth } = this.props;
    return <Landing auth={auth}/>;
  }
}

const mapStateToProps = ({auth}) => {
    return {auth : auth.isAuthenticated}
};

export default withRouter(connect(mapStateToProps,null)(landingContainer));
