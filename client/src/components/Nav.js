import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>  (
            <div className="Nav">
                Logo
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/members">Directory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/members/add">Add</Link>
                </nav>
            </div>
        )

export default Nav;