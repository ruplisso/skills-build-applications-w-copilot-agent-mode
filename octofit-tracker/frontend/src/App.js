import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={
            <div className="card welcome-card p-4">
              <div className="card-body">
                <h1 className="display-5 mb-3">Welcome to OctoFit Tracker</h1>
                <p className="lead">Track activities, compete on leaderboards, and discover workouts with your team.</p>
                <hr />
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <Link to="/activities" className="btn btn-primary">Activities</Link>
                  <Link to="/leaderboard" className="btn btn-success">Leaderboard</Link>
                  <Link to="/teams" className="btn btn-info text-white">Teams</Link>
                  <Link to="/users" className="btn btn-warning">Users</Link>
                  <Link to="/workouts" className="btn btn-danger">Workouts</Link>
                </div>
              </div>
            </div>
          } />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
