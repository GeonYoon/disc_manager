import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
  render() {
    return <Home />
  }
}

const mapStateToProps = ({ form, auth }) => {
  return {
    percentage: form.percentage,
    username: auth.user
  }
};

export default withRouter(connect(mapStateToProps, null)(HomeContainer));
