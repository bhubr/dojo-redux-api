import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import './App.css';
import { connect } from 'react-redux';
import { GET_USERS_SUCCESS } from './actions/types';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/users')
      .then(res => res.data)
      .then(users => dispatch({
        type: GET_USERS_SUCCESS,
        users
      })
      );
  }

  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <UsersList users={users} />
          </div>
          <div className="col-md-4">
            <NewUserForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });

export default connect(mapStateToProps)(App);
