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
  handleForm : (age, height,weight,muscle_mass,body_fat,smoking,file) => {
    dispatch(form(age,
                  height,
                  weight,
                  muscle_mass,
                  body_fat,
                  smoking,
                  file,
                  ownProps.history));
  }
});
export default withRouter(connect(null,mapDispatchToProps)(formContainer));
