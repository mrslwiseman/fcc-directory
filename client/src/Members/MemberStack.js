import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';

const MemberStackComponent = ({ stack }) => (
    <div>
      <h4>Tech I'm using</h4>
      <ul>
        {stack.map((stackItem, index) => <li key={index}>{stackItem}</li>)}
      </ul>
    </div>
  )

  export default MemberStackComponent