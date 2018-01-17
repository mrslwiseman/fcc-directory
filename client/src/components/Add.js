import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    handleChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'email' || e.target.name === 'github' ) {
            this.setState({
                connect: {
                    [e.target.name]: e.target.value
                }
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/directory")
        setTimeout(() => this.props.addMember(this.state), 1000)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Profile</h1>

                <div className="field">
                    <input onChange={this.handleChange} type="text" name="chosen_name" id="name" className="input" required />
                    <label className="label" htmlFor="name">Name:</label>
                </div>

                <div className="field">
                    <input onChange={this.handleChange} name="email" className="input" id="email" type="email" required />
                    <label className="label" htmlFor="email">Email:</label>
                </div>

                <button>Submit This</button>
            </form>
        )
    }
}

export default withRouter(Add);