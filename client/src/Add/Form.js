import React, { Component } from 'react';

const Form = () => (
<form onSubmit={this.handleSubmit}>
        <label>
          Name
            <input
            name="name"
            type="text"
            value={this.state.formData.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Surname
            <input
            name="surname"
            type="text"
            value={this.state.formData.surname}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Location
            <input
            name="location"
            type="text"
            value={this.state.formData.location}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Bio
            <input
            name="bio"
            type="text"
            value={this.state.formData.bio}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Stack
            <input
            name="stack"
            type="text"
            value={this.state.formData.stack}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Free Code Camp username
            <input
            name="fcc_username"
            type="text"
            value={this.state.formData.contact.fcc}
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Github username
            <input
            name="github"
            type="text"
            value={this.state.formData.contact.github}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Twitter
            <input
            name="twitter"
            type="text"
            value={this.state.formData.contact.twitter}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Meetup username
            <input
            name="meetup_username"
            type="text"
            value={this.state.formData.contact.meetup_username}
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Email
            <input
            name="email"
            type="email"
            value={this.state.formData.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <img src={this.state.formData.picture} />
        <input type="submit" value="submit" />
      </form>
)

export default Form