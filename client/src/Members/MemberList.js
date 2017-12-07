import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import MemberCardComponent from './MemberCard'
import './Member.css'

const MemberListComponent = ({ members }) => (
  <div bsClass="row" className="memberCardRow">
    {members.map((member, index) => <MemberCardComponent key={member._id || index} props={member} />)}
  </div>
)

export default MemberListComponent
