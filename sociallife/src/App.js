// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Welcome from './components/Home'; // Import the Welcome component
import Home from './components/Home'; // Import the Home component
import authService from './components/authService';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const user = await authService.login(username, password);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add the Home component */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/welcome" element={isAuthenticated ? <Welcome user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
