import React, { Component } from 'react';

const MemberMeetup = ({ props }) => (
    <div>
      <h4>Meetup.com info</h4>
      <h5>Meetups attended: </h5>
      {props.attended}
      <h5>Last seen:</h5>
       {props.last_seen}
    </div>
  )

  export default MemberMeetup