import React, { Component } from 'react';
import './App.css';

const MemberMeetupComponent = ({props}) => (
  <div>
    <h4>Meetup.com info</h4>
    <div>Meetups attended: {props.attended}</div>
    <div>Last seen: {props.last_seen}</div>
  </div>
)

const MemberStackComponent = ({stack}) => (
  <div>
    {stack.map(stackItem => <li>{stackItem}</li>)}
  </div>
)

const MemberComponent = ({props}) => (
  <div>
    <img alt={props.name + ' ' + props.surname + '\'s profile picture'} src={props.picture} />
    <div>
      <h2>{props.name} {props.surname}</h2>
      {props.location}
      <p>{props.bio}</p>
      <ul>
        <MemberStackComponent stack={props.stack} />
      </ul>
    </div>

    <div>
      <h4>Free Code Camp Details:</h4>
      <div>Recent Project: {props.fcc_recent}</div>
      <div>FCC Forum Stats: {props.fcc_forum_stats}</div>
      <MemberMeetupComponent props={props.meetup} />
    </div>

    <div>
      <h3>Connect:</h3>
      <a href={props.socials.fcc} target="_blank">Free Code Camp</a>
      <span><a href={`mailto://${props.email}`}>Email</a></span>
      <span><a href={props.socials.github} target="_blank">Github</a></span>
      <span><a href={props.socials.twitter} target="_blank">Twitter</a></span>
    </div>
  </div>
)

const MemberListComponent = ({members}) => (
  <div>
   { members.map(member => <MemberComponent key={member._id} props={member} /> )}
  </div>
)

class App extends Component {
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
export default App;