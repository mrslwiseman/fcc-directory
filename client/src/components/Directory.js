import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router-dom';
import Member from './Member';
import MemberLoader from './MemberLoader';

class Directory extends Component {
    componentWillMount() {
        this.props.getMembers();
    }
    render() {
        const { members } = this.props;
        return (
            <div>
                <h1>Free Code Camp Melbourne | Directory:</h1>
                <Link to="/add">Add Your Profile</Link>



                    <ReactCSSTransitionGroup
                        component="div"
                        className="directory"
                        transitionName="member"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {
                            members.map((member, i) => (
                                <Member key={i} {...member} />
                            ))
                        }
                    </ReactCSSTransitionGroup>


                    {
                        !members.length > 0 &&
                        <div className="directory">
                            <MemberLoader />
                        </div>

                    }



            </div>

        )
    }
}


export default Directory;