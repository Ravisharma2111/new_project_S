import React from 'react'
import './Footer.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <footer className='footer1'  >
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='footer2'   >© 2022 Synchrony Labs.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link  className='footer2'  >Help Cente</Nav.Link>
            <Nav.Link  className='footer2'  >Term of Use</Nav.Link>

            <Nav.Link  className='footer2'  >Privacy Policy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </footer>
  )
}

export default Footer