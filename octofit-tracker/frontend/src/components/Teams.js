import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log('Fetching teams from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Teams data:', data);
        const items = data.results || data;
        setTeams(Array.isArray(items) ? items : []);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-info text-white">
        <h2 className="mb-0">Teams</h2>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.id || index}>
                <td>{index + 1}</td>
                <td><strong>{team.name}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted">
        Total teams: {teams.length}
      </div>
    </div>
  );
}

export default Teams;
