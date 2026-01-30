import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import AdminDashboard from './AdminDashboard';

function RoleBasedRouting() {
  const userRole = 'farmer'; // Replace with actual role logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={userRole === 'farmer' ? <App /> : <Navigate to="/admin" />} />
        <Route path="/admin" element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default RoleBasedRouting;