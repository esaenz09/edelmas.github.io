import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='my-4 mx-5'>
      <Navbar collapseOnSelect expand='md'>
        <Navbar.Brand>
          <Nav.Link eventKey="1" as={Link} to="/">
            <img
              width="55"
              height="55"
              src="ESIcon.png"
              alt="website logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className='fs-5 ms-auto'>
            <Nav.Link eventKey="2" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/experience">
              Experience
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link eventKey="5" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;