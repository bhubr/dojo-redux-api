import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CREATE_USER_SUCCESS } from './actions/types';

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
    const { dispatch } = this.props;
    dispatch({
      type: 'UPDATE_FORM',
      name: e.target.name,
      value: e.target.value,
    })
  }

  handleSubmit(e) {

    const { firstname, lastname, avatar, dispatch } = this.props;
    axios.post('/api/users',
      {
        firstname,
        lastname,
        avatar
      })
      .then(res => res.data)
      .then(newUser => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          newUser,
        })
      })
    //.catch(err => dispatch({type:'CREATE_USER_FAILURE', message:err.message))
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    const { firstname, lastname, avatar } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New user</h2>

        <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          name="firstname"
          onChange={this.handleChange}
          value={firstname}
        />

        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          name="lastname"
          onChange={this.handleChange}
          value={lastname}
        />

        <label htmlFor="avatar">Avatar</label>
        <input
          id="avatar"
          name="avatar"
          onChange={this.handleChange}
          value={avatar}
        />

        <button
          className="btn btn-primary"
          type="submit"
        >Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => state.form;

// const mapStateToProps = state=> {
//   return {
//     fistname: state.form.firstname,
//     last...
//   }
// }

export default connect(mapStateToProps)(NewUserForm);
