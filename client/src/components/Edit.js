import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class Edit extends Component {
    constructor(props) {
        super(props)
    }
    handleSubmit = () => {
        return;
    }
    handleChange = () => {
        return;
    }


    render() {
        //const member = this.props.location.member;
        const id = this.props.match.params.id != null ? this.props.match.params.id : ""
        const member = this.props.members[this.props.match.params.id];
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Edit Profile for member id: {id} {member.chosen_name}</h1>

                <div className="field">
                    <input onChange={this.handleChange} type="text" name="chosen_name" id="name" className="input" required />
                    <label className="label" htmlFor="name">Name:</label>
                </div>

                <div className="field">
                    <input onChange={this.handleChange} name="email" className="input" id="email" type="email" required />
                    <label className="label" htmlFor="email">Email:</label>
                </div>

                <button>Edit This</button>
            </form>
        )
    }
}
export default withRouter(Edit);