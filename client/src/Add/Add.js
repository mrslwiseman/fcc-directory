import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
//import './Add.css';
import Auth from '../Auth/Auth';
import axios from 'axios';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      profile: {},
      formData: {
        contact: {},
        meetup: {},
        stack: []
      }
    };

  }
componentWillMount(){
  const { userProfile, getProfile } = this.props.auth;
  if (!userProfile) {
    getProfile((err, profile) => {
      
      let name = profile.given_name ? profile.given_name : profile.nickname ? profile.nickname : "";
      let surname = profile.family_name ? profile.family_name : "";
      let email = profile.email ? profile.email : "";
      let picture = profile.picture ? profile.picture : "";

      this.setState( Object.assign({}, this.state, {
        formData: {
          name: name,
          surname: surname,
          email: email,
          picture: picture,
          contact: {},
          meetup: {},
          stack: []
        },
        profile
      }) );
console.log(this.state)
    });
  } else {
    this.setState({ profile: userProfile });
  }

  console.log('state:')
  setTimeout(()=>console.log(this.state), 1000)
  
}


  handleInputChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    if (name == 'stack') {
      value = value.split(",")
    }

    if (name == 'twitter') {
      name = "contact";
      value =
        Object.assign({}, this.state.formData.contact, {
          twitter: value
        })
    }
    if (name == 'github') {
      name = "contact";
      value =
        Object.assign({}, this.state.formData.contact, {
          github: value
        })
    }
    if (name == 'fcc_username') {
      name = "fcc";
      value =
        Object.assign({}, this.state.formData.contact, {
          fcc_username: value
        })
    }
    if (name == 'meetup_username') {
      name = "meetup";
      value =
        Object.assign({}, this.state.formData.meetup, {
          meetup_username: value
        })
    }





    this.setState({
      formData: Object.assign({}, this.state.formData, {
        [name]: value
      })
    })
    console.log(this.state)

  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state.formData
    axios.post("/members", data)
    this.props.history.replace(`/members`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
            <input
            name="name"
            type="text"
            value={this.state.formData.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Surname
            <input
            name="surname"
            type="text"
            value={this.state.formData.surname}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Location
            <input
            name="location"
            type="text"
            value={this.state.formData.location}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Bio
            <input
            name="bio"
            type="text"
            value={this.state.formData.bio}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Stack
            <input
            name="stack"
            type="text"
            value={this.state.formData.stack}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Free Code Camp username
            <input
            name="fcc_username"
            type="text"
            value={this.state.formData.contact.fcc}
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Github username
            <input
            name="github"
            type="text"
            value={this.state.formData.contact.github}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Twitter
            <input
            name="twitter"
            type="text"
            value={this.state.formData.contact.twitter}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Meetup username
            <input
            name="meetup_username"
            type="text"
            value={this.state.formData.contact.meetup_username}
            onChange={this.handleInputChange} />
        </label>
        <br />







        <label>
          Email
            <input
            name="email"
            type="email"
            value={this.state.formData.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <img src={this.state.formData.picture} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Add;
