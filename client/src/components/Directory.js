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
        const { members, editMember } = this.props;
        return (
            <div>
                <h1>Free Code Camp Melbourne | Directory:</h1>
                <Link to="/members/add">Add Your Profile</Link>



                    <ReactCSSTransitionGroup
                        component="div"
                        className="directory"
                        transitionName="member"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {
                            Object.keys(members).map((key) => (
                                <Member key={key} member={members[key]} id={key} />
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