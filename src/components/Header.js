import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='my-4 mx-5'>
      <Navbar expand='md'>
        <Navbar.Brand>
          <Link className="fs-2 text-decoration-none text-black" to="/">
            <img
              width="55"
              height="55"
              src="ESIcon.png"
              alt="website logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Link>
              <Link className="fs-5 text-decoration-none text-secondary" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="fs-5 text-decoration-none text-secondary" to="/experience">
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="fs-5 text-decoration-none text-secondary" to="/resume">
                Resume
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="fs-5 text-decoration-none text-secondary" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;