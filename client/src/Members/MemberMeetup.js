import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';

const MemberMeetupComponent = ({ props }) => (
    <div>
      <h4>Meetup.com info</h4>
      <h5>Meetups attended: </h5>
      {props.attended}
      <h5>Last seen:</h5>
       {props.last_seen}
    </div>
  )

  export default MemberMeetupComponent