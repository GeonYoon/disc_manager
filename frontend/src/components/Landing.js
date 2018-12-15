import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Landing extends Component {
  render() {
    const isAlreadyLoggedin = this.props.auth
    return isAlreadyLoggedin
          ? (<Redirect to="/form" />)
          : (
            <div style ={{ textAlign : 'center'}}>
                <h1>
                    허리 디스크 위험
                </h1>
                    당신이 허리디스크에 걸릴 확률! 
            </div>
          );
  }
}

export default Landing