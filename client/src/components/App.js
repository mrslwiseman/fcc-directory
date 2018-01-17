import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Directory from './Directory';
import NotFound from './NotFound';
import Add from './Add'
import Edit from './Edit'


class App extends Component {
constructor(props){
    super(props);
    this.state = {
        members: {}
    }
}

getMembers = () => {
    const members = {
       "01": {
        chosen_name: "Matt",
        last_name: "Wiseman",
        location: "Preston",
        picture: "./images/image.jpg",
        bio: "Partial reference works similar to the parent reference, but while parent reference contains the whole selector, partial selectors contain only the first merged N levels of the nested selectors, so you could access those nesting levels individually.",
        stack: "Mongo,Express,React,Node.js",
        connect: {
            email: "mrslwiseman@gmail.com",
            fcc: "mrslwiseman",
            github: "mrslwiseman",
            meetup: "mrslwiseman"
        },
        joined: "April 2017"
    },
    "02": {
        chosen_name: "Matt",
        last_name: "Wiseman",
        location: "Preston",
        picture: "./images/image.jpg",
        bio: "Partial reference works similar to the parent reference, but while parent reference contains the whole selector, partial selectors contain only the first merged N levels of the nested selectors, so you could access those nesting levels individually.",
        stack: "Mongo,Express,React,Node.js",
        connect: {
           
            meetup: "mrslwiseman"
        },
        joined: "April 2017"
    }}
    
    console.log('getting members');
    setTimeout(() => this.setState({members}), 1500)
    // this.setState({members})
}

addMember = (newMember) => {
    console.log('adding member....');
    const newState = this.state.members;
    newState.push(newMember)
    this.setState({members: newState})
    
}
editMember = (memberToEdit) => {
    console.log(memberToEdit);
}

render() {
    return (
    <Router>
        <div>
            <Route path="/" component={Nav} />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route 
                    exact path="/members" 
                    render={() => ( 
                        <Directory 
                            members={this.state.members} 
                            editMember = {this.editMember} 
                            getMembers={this.getMembers}/>)}/>
                    <Route 
                        exact path="/members/add" 
                        render={() => ( 
                            <Add addMember={this.addMember}/>)}/>
                    <Route 
                        exact path="/members/:id/edit" 
                        render={() => ( 
                            <Edit 
                            members={this.state.members} 
                            />)}/>
                    <Route component={NotFound} />
                </Switch>
            </main>
        </div>
    </Router>
    )}
}


export default App;