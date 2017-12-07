import React, { Component } from 'react';

const MemberStack = ({ stack }) => (
    <div>
      <h4>Stack I'm Learning:</h4>
      <ul>
        {stack.map((stackItem, index) => <li key={index}>{stackItem}</li>)}
      </ul>
    </div>
  )

export default MemberStack