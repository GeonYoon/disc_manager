import React, {Component} from 'react';
import { Row, Input } from 'react-materialize';
import {Redirect} from "react-router-dom";


class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      password2 : '',
      email : ''
    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    this.props.handleRegister(this.state.username,
                              this.state.password,
                              this.state.password2,
                              this.state.email,
                              this.props.history);
  };

  render() {
    const isAlreadyLoggedin = this.props.auth
    const errors = this.props.errorDetail.data || {}
    return isAlreadyLoggedin
    ? (<Redirect to="/form" />)
    : (
            <div style={{padding:20}}>
              <Row>
                <Input placeholder="Enter your username"
                                    s={12}
                                    label="Username"
                                    name="username"
                                    onChange={this.handleChange}

                 />
                <Input type="email"
                       label="Email"
                       s={12}
                       name="email"
                       onChange={this.handleChange}
                />
                <Input type="password"
                       label="password"
                       s={12}
                       name="password"
                       onChange={this.handleChange}
                 />
                <Input type="password"
                       label="confirm your password"
                       s={12}
                       name="password2"
                       onChange={this.handleChange}
                />
              </Row>
              <div className="fixed-action-btn">
                <div className="btn-floating btn-large red">
                    <i className="material-icons"
                       onClick={this.handleSubmit}
                    >
                      add
                    </i>
                </div>
              </div>
                {
                  errors.non_field_errors || errors.username || errors.email?
                      <h3>Authentication Fail</h3> : ""

                }

                {
                 errors.non_field_errors?
                   <p>
                      {errors.non_field_errors}
                   </p>:""
                }
                {
                 errors.username?
                   <p>
                      {errors.username}
                   </p>:""
                }
                {
                 errors.email?
                   <p>
                      {errors.email}
                   </p>:""
                }
            </div>
          );
  }
}

export default Register
