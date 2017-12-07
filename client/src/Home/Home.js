import React, { Component } from 'react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    return (
      <div className="container">
        <h1>Welcome to the FCC Melbourne Member Directory</h1>
      </div>
    );
  }
}

export default Home;
