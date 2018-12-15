import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import {form} from '../actions';
import { withRouter } from 'react-router-dom';

class formContainer extends Component {
  render(){
    const { handleForm} = this.props;
    return <Form handleForm = {handleForm}
           />;
  }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  handleForm : (age, blood_pressure) => {
    dispatch(form(age,
                  blood_pressure,
                  ownProps.history));
  }
});
export default withRouter(connect(null,mapDispatchToProps)(formContainer));
