import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import MemberCard from './MemberCard'

const MemberList = ({ members }) => (
    <div bsClass="row" className="memberCardRow">
      {members.map((member, index) => <MemberCard key={member._id || index} props={member} />)}
    </div>
  )

  export default MemberList