import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
//import './Add.css';
import Auth from '../Auth/Auth';
import axios from 'axios';


const MeetupSearch = (props) => {
  const members = props.searchResults.map(m => {
    return (
      <div key={m.id}>
        <img src={m.photo} />
        <div>{m.name}</div>
        <button type="button" name="meetup_username" value={m.id} onClick={props.handleClick}>Select</button>
      </div>
    )
  })
  return <div>
    Meetup search results:
            {members}
  </div>
}

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prefillFormData = this.prefillFormData.bind(this)
    this.searchForMeetup = this.searchForMeetup.bind(this)

    this.state = {
      meetupSearchResults: [],
      profile: {},
      formData: {
        name: "",
        surname: "",
        email: "",
        picture: "",
        bio: "",
        contact: {
          github: "",
          twitter: ""
        },
        fcc: {
          fcc_username: "",
          fcc_forum_status: "",
          fcc_recent: ""
        },
        meetup: {
          username: "",
          last_seen: "",
          attended: ""
        },
        stack: []
      }
    };

  }

  searchForMeetup(name) {
    console.log('searching...')
    axios.get(`/members/add/meetup?name=${name}`)
      .then(res => {
        console.log('from react:')
        console.log(res.data)
        this.setState(Object.assign({}, this.state, {
          meetupSearchResults: res.data
        }))
      })
  }


  prefillFormData(profile) {
    let name = profile.given_name ? profile.given_name : profile.nickname ? profile.nickname : "";
    let surname = profile.family_name ? profile.family_name : "";
    let email = profile.email ? profile.email : "";
    let picture = profile.picture ? profile.picture : "";

    this.setState(Object.assign({}, this.state, {
      formData: Object.assign({}, this.state.formData, {
        name: name,
        surname: surname,
        email: email,
        picture: picture
      }),
      profile
    }));
    // once name is loaded
    // search meetup group for names
    this.searchForMeetup(this.state.formData.name);
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.prefillFormData(profile)
      });
    } else {
      this.prefillFormData(userProfile)
    }
  }

  handleInputChange(event) {
    console.log('handleInputChange...')
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
    console.log('meetup_username...')
    
      name = "meetup";
      value =
        Object.assign({}, this.state.formData.meetup, {
          username: value
        })
    }

    this.setState({
      formData: Object.assign({}, this.state.formData, {
        [name]: value
      })
    })

  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state.formData
    axios.post("/members", data)
    this.props.history.replace(`/members`)
  }

  render() {
    return (
      <div>

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
              value={this.state.formData.fcc.fcc_username}
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
        <MeetupSearch searchResults={this.state.meetupSearchResults} handleClick={this.handleInputChange}/>          
          <label>
            Meetup username
            <input
              name="meetup_username"
              type="text"
              value={this.state.formData.meetup.username}
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
      </div>
    );
  }
}

export default Add;
