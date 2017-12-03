import React, { Component } from 'react';

const MemberMeetupComponent = ({props}) => (
    <div>
      <h4>Meetup.com info</h4>
      <div>Meetups attended: {props.attended}</div>
      <div>Last seen: {props.last_seen}</div>
    </div>
  )
  
  const MemberStackComponent = ({stack}) => (
    <div>
      {stack.map((stackItem, index) => <li key={index}>{stackItem}</li>)}
    </div>
  )
  
  const MemberComponent = ({props}) => (
    <div className="col-sm-4 col-lg-3" key={props._id}>
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h2 className="panel-title">{props.name} {props.surname}</h2>
        {props.location}
        </div>
        <img className="img-responsive" alt={props.name + ' ' + props.surname + '\'s profile picture'} src={props.picture} />
  
        
          <div className="panel-body">
        <p>{props.bio}</p>
        </div>
        <div>
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
    </div>
  )
  
  const MemberListComponent = ({members}) => (
    <div>
     { members.map(member => <MemberComponent key={member._id} props={member} /> )}
    </div>
  )

  export {MemberComponent, MemberListComponent, MemberMeetupComponent, MemberStackComponent}
  