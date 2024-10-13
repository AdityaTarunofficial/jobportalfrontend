import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import Login from './components/Login';
import Register from './components/Register';
import AppliedJobs from './components/AppliedJobs';
import UserProfile from './components/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      </Routes>
    </div>
  );
};

export default App;
