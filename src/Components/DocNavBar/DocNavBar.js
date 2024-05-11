import './DocNavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React from 'react'
import { Link } from 'react-router-dom';

const DocNavBar = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary docNav">
      <Container>
        <Navbar.Brand href="#home">appName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='dashLogout  text-decoration-none ' to={'/'}>Logout</Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default DocNavBar
