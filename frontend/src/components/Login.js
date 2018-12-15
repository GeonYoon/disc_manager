import React, {Component} from 'react';
import { Row, Input } from 'react-materialize';
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    this.props.handleLogin(this.state.username, this.state.password,this.props.history);
  };

  renderError() {
    if (this.props.error){
      return (<h5> Invalid Authentication Information </h5>)
    }
  }

  render() {
    const isAlreadyLoggedin = this.props.auth
    return isAlreadyLoggedin
          ? (<Redirect to="/form" />)
          : (
            <div style={{padding:20}}>
              <Row>
                <Input
                  placeholder="Type your username"
                  label="Username"
                  s={12}
                  name="username"
                  // value={this.state.username}
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  label="password"
                  name="password"
                  // value={this.state.password}
                  onChange={this.handleChange}
                  s={12}
                />
              </Row>
              <div className="fixed-action-btn">
                <div className="btn-floating btn-large red">
                    <i
                      className="material-icons"
                      onClick={this.handleSubmit}
                    >
                      arrow_forward
                    </i>
                </div>
              </div>
              <div>
                { this.renderError() }
              </div>
            </div>
          );
  }
}

export default Login
