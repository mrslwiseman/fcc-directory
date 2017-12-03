import React, { Component } from 'react';
import { MemberListComponent } from './components/members/member'


class Directory extends Component {
    constructor(props){
      super(props);
      // this has to have initial state otherwise will have MemberList render error
      // how can i render after /members fetch has come back?
      this.state = {members: [
        {
          "_id": "Loading...",
          "name": "Loading...",
          "surname": "Loading...",
          "location": "Loading...",
          "email": "Loading...",
          "picture": "images/fcc-loading.svg",
          "bio": "Loading...",
          "stack": [
            "Loading..."
          ],
          "fcc_recent": "Loading...",
          "fcc_forum_stats": "Loading...",
          "socials": {
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
      fetch('/members')
        .then(res => res.json())
        .then(obj => this.setState( {"members": obj} ));
    }
  
    componentDidUpdate(){
      console.log(this.state)
    }
  
  
    render() {
      return (
        <MemberListComponent members={this.state.members} />
      )
    }
  }

  export default Directory;