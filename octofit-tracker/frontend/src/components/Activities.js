import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log('Fetching activities from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Activities data:', data);
        const items = data.results || data;
        setActivities(Array.isArray(items) ? items : []);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0">Activities</h2>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Type</th>
              <th scope="col">Duration (min)</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={activity.id || index}>
                <td>{index + 1}</td>
                <td>{activity.user}</td>
                <td><span className="badge bg-info text-dark">{activity.type}</span></td>
                <td>{activity.duration}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted">
        Total activities: {activities.length}
      </div>
    </div>
  );
}

export default Activities;
