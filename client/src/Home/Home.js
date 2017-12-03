import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MemberListComponent } from '../components/members/member';
import  Directory  from '../Directory';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
              {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
        {
          isAuthenticated() && (
              <Directory />
            )
        }

      </div>
    );
  }
}

export default Home;
