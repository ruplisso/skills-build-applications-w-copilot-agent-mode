import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log('Fetching workouts from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts data:', data);
        const items = data.results || data;
        setWorkouts(Array.isArray(items) ? items : []);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-danger text-white">
        <h2 className="mb-0">Workouts</h2>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => (
              <tr key={workout.id || index}>
                <td>{index + 1}</td>
                <td><strong>{workout.name}</strong></td>
                <td>{workout.description}</td>
                <td>
                  <span className={`badge ${workout.difficulty === 'easy' ? 'bg-success' : workout.difficulty === 'medium' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                    {workout.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted">
        Total workouts: {workouts.length}
      </div>
    </div>
  );
}

export default Workouts;
