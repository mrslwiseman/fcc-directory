import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Members  from '../Members';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        <h1>Welcome to the FCC Melbourne Member Directory</h1>
      </div>
    );
  }
}

export default Home;
