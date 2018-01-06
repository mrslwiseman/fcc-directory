import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                Logo
                <ul>
                    <li>Home</li>
                    <li>Directory</li>
                    <li>Login</li>
                    <li>Add</li>
                </ul>
            </div>
        )
    }
}
