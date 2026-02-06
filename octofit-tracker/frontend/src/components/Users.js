import React, { useEffect, useState } from 'react';

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `${API_BASE_URL}/api/users/`;
    console.log('Fetching users from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Users data:', data);
        const items = data.results || data;
        setUsers(Array.isArray(items) ? items : []);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-warning text-dark">
        <h2 className="mb-0">Users</h2>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Team</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index}>
                <td>{index + 1}</td>
                <td><strong>{user.name}</strong></td>
                <td><a href={`mailto:${user.email}`} className="link-primary">{user.email}</a></td>
                <td><span className="badge bg-secondary">{user.team}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted">
        Total users: {users.length}
      </div>
    </div>
  );
}

export default Users;
