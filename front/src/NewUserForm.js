import React, { Component } from 'react';

class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      avatar: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New user</h2>

        <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          name="firstname"
          onChange={this.handleChange}
        />

        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          name="lastname"
          onChange={this.handleChange}
        />

        <label htmlFor="avatar">Avatar</label>
        <input
          id="avatar"
          name="avatar"
          onChange={this.handleChange}
        />

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

export default NewUserForm;
