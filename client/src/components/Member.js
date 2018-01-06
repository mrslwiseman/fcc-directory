import React, { Component } from 'react';

const Member = (props) => {
    const { chosen_name: first, last_name: last, picture, location, bio, stack, connect, joined } = props
    return (
        <div className="m">
            <div className="m__photo">
                <img src={picture} className="m__img" />
            </div>
            <div className="m__details">
                <div className="m__name">
                    <h2>{first} {last}</h2>
                </div>
                <div>
                    <p className="m__stack">{stack}</p>
                </div>
                <div>
                    <span className="m__location">{location}</span>
                </div>
            </div>
            <div className="m__connect">
                {/* map over Object.keys(connect) and generate array of conncetions */}
                <a className="m__fcc" href={connect.fcc}></a>
                <a className="m__github" href={connect.github}></a>
                <a className="m__meetup" href={connect.meetup}></a>
                <a className="m__email" href={connect.email}></a>

            </div>
            <div className="m__bio">
                {bio}
            </div>
            <div>
                <p className="m__joined">Joined {joined}</p>
            </div>
        </div>
    )
}

export default Member;