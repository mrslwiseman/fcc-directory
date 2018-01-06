import React, { Component } from 'react';
import Member from './Member';

export default class Directory extends Component {
    render() {
        return (
            <div className="Directory">
                <h1>Free Code Camp Melbourne | Directory:</h1>
                <div className="directory">
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                
                </div>
                {/* for each of members in members prop render out: <Member /> */}
            </div>
        )
    }
}
