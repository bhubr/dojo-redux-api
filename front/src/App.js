import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get('/api/users')
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }
  render() {
    const { users } = this.state;
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

export default App;
