// Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import Home from './Home'; // Import the Home component

const Navbar = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">SocialLife</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add a link to the Home component */}
            {!isAuthenticated && <Login onLogin={onLogin} />} 
          </Nav>
          {isAuthenticated && <Nav className="ms-auto"><Nav.Link onClick={onLogout}>Logout</Nav.Link></Nav>}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
