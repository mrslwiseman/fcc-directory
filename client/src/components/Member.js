import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Member = (props) => {
    const { chosen_name: first, last_name: last, picture, location, bio, stack, connect, joined } = props.member
    return (
        <div className="m">
            {picture &&
                <div className="m__photo">
                    <img src={picture} className="m__img" />
                </div>
            }

            <div className="m__details">
                <div className="m__name">
                    <h2>{first} {last}</h2>
                </div>
                {stack &&
                    <div>
                        <p className="m__stack">{stack}</p>
                    </div>
                }

                {location &&
                    <div>
                        <span className="m__location">{location}</span>
                    </div>
                }

            </div>

            {connect &&
                <div className="m__connect">
                    {/* map over Object.keys(connect) and generate array of conncetions */}
                    {
                        Object.keys(connect) // [ 'email', 'fcc', 'github', 'meetup' ]
                            .map((connection, i) => {
                                return <a className={`m__${connection}`} key={i} href={`${connect[connection]}`}></a>
                            })
                        }
                </div>
            }

            {bio &&
                <div className="m__bio">
                    {bio}
                </div>
            }
            {joined &&
                <div>
                    <p className="m__joined">Joined {joined}</p>
                </div>
            }
            <Link to={{pathname: `/members/${props.id}/edit`}}>Edit</Link>

        </div>
    )
}

export default Member;