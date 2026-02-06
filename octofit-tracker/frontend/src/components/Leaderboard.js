import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    console.log('Fetching leaderboard from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard data:', data);
        const items = data.results || data;
        setLeaderboard(Array.isArray(items) ? items : []);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h2 className="mb-0">Leaderboard</h2>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Team</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry.id || index}>
                <td><span className="badge bg-warning text-dark">{index + 1}</span></td>
                <td>{entry.team}</td>
                <td><strong>{entry.points}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted">
        Total teams ranked: {leaderboard.length}
      </div>
    </div>
  );
}

export default Leaderboard;
