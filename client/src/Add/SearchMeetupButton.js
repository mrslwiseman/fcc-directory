import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';

class SearchMeetupButton extends Component {
    constructor(props){
        super(props)
    }
    


    render() {
    return (
        <span>
            <button type='button' onClick={this.props.handleClick}>Search Meetup for me</button>
        </span>)
    }

}

export default SearchMeetupButton