import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import {form} from '../actions';
import { withRouter } from 'react-router-dom';

class formContainer extends Component {
  render(){
    const { form, handleForm,username,token} = this.props;
    return <Form form={form} 
                 handleForm = {handleForm} 
                 username={username}
                 token={token}
            />
  }
}

const mapStateToProps = ({ form,auth }) => ({
  form,
  token : auth.token
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleForm : (formData,token) => {
    dispatch(form(formData,token, ownProps.history))
  }
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(formContainer));
