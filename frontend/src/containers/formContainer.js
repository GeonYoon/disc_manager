import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import {form} from '../actions';
import { withRouter } from 'react-router-dom';

class formContainer extends Component {
  render(){
    const { form, handleForm } = this.props;
    return <Form form={form} handleForm = {handleForm} />
  }
}

const mapStateToProps = ({ form }) => ({
  form
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleForm : (formData) => {
    dispatch(form(formData, ownProps.history))
  }
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(formContainer));
