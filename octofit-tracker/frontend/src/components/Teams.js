import React, { useEffect, useState } from 'react';

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = `${API_BASE_URL}/api/teams/`;
    console.log('Fetching teams from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Teams data:', data);
        const items = data.results || data;
        setTeams(Array.isArray(items) ? items : []);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id || index}>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
