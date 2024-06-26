import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Login from './Login'; // Import the Login component
import Welcome from './Welcome'; // Import the Welcome component

const Navbart = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
  const [showLogin, setShowLogin] = useState(false); // State to track if login is clicked

  // Function to handle login button click
  const handleLoginButtonClick = () => {
    setShowLogin(true); // Set showLogin to true when login button is clicked
  };

  // Function to handle login
  const handleLogin = () => {
    // Implement your login logic here
    // For this example, let's just simulate successful login
    setIsAuthenticated(true);
    setShowLogin(false); // Hide the login component after successful login
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">{isAuthenticated ? <Welcome /> : 'Your Logo'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          {/* Render the login button */}
          <Button variant="primary" onClick={handleLoginButtonClick}>Login</Button>
          {/* Conditionally render the Login component when showLogin is true */}
          {showLogin && <Login onLogin={handleLogin} />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbart;
