import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Directory from './Directory';
import NotFound from './NotFound';


const App = () => {
    { /* should have state of all the members */}
    return (
        <Router>
        <div>
            <Route path="/" component={Nav} />
            <main>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/directory" component={Directory} />
                <Route component={NotFound} />
                </Switch>
            </main>
         </div>   
        </Router>
    )
}

export default App;