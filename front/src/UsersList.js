import React from 'react';

const UsersList = ({ users }) => (
  <div>
    {
      users.map(user => (
        <div key={user.id} className="media">
          <img className="mr-3" src={user.avatar} alt={user.firtname} />
          <div className="media-body">
            <h5 className="mt-0">{user.firstname} {user.lastname}</h5>
          </div>
        </div>
      ))
    }
  </div>
);

export default UsersList;
