import React, { Component } from 'react';
import MemberListComponent from './MemberList'
import axios from 'axios'

class Members extends Component {
    constructor(props){
      super(props);
      // this has to have initial state otherwise will have MemberList render error
      this.state = {members: [
        {
          "_id": "Loading...",
          "name": "Loading...",
          "surname": "Loading...",
          "location": "Loading...",
          "email": "Loading...",
          "picture": "",
          "bio": "Loading...",
          "stack": [
            "Loading..."
          ],
          
          "fcc_forum_stats": "Loading...",
          "fcc": {
            "fcc_username": "Loading...",
            "fcc_recent": "Loading...",
            "fcc_forum_stats": "Loading..."
          },
          "contact": {
            "fcc": "Loading...",
            "github": "Loading...",
            "twitter": "Loading..."
          },
          "meetup": {
            "attended": "Loading...",
            "last_seen": "Loading..."
          }
        }
      ]}
    }
  


    componentDidMount() {
      axios.get("/members")
      .then(res => this.setState( {"members": res.data} ));
    }
  
    componentDidUpdate(){
    }
  
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
              <MemberListComponent members={this.state.members} />
              )
          }
  
        </div>
      );
    }

  }

  export default Members;