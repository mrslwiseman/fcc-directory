import React, { Component } from 'react';
import Member from './Member';

export default class Directory extends Component {
    render() {

        const sampleMember = {
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
        }

        return (
            <div>
            <h1>Free Code Camp Melbourne | Directory:</h1>
            <div className="directory">
                {/* for each of members in members prop render out: <Member /> */}
                    <Member {...sampleMember}/>
                </div>
            </div>
        )
    }
}
