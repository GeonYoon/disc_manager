import React, {Component} from 'react';
import {connect} from 'react-redux';
import Output from '../components/Output';
import { withRouter } from 'react-router-dom';

class outputContainer extends Component {
  render(){
    const {percentage,username} = this.props;
    return <Output
              percentage = {percentage}
              username = {username}
           />;
  }
}

const mapStateToProps = ({form,auth}) => {
  return {
    percentage : form.percentage,
    username : auth.user
  }
};

export default withRouter(connect(mapStateToProps,null)(outputContainer));
