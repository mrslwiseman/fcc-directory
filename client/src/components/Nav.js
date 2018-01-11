import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>  (
            <div className="Nav">
                Logo
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/directory">Directory</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        )

export default Nav;