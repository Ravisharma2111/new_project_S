import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { MdOutlineEqualizer } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import photo from "./faviconm.jpg";
import './index.css'
import './Header.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar className='header1'
        collapseOnSelect
        expand="lg"
      >
        <img
        alt="hello"
        className='header2'
          src={photo}
        />
        <Navbar.Brand href="/" className='header3' >
          Synchrony
        </Navbar.Brand>
        <span className='header4'  >
        <button className='header5'
        
        >
          Beta
        </button>
        </span>
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto header6 " >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Nav.Link className='header7' href="/">
                <button className='header8'
                 
                >
                  <MdOutlineEqualizer /> Dashboard{" "}
                </button>{" "}
              </Nav.Link>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Nav.Link className='header9'   href="/stacking">
                <button  className='header10'  >
                  {" "}
                  <BsFillArrowUpRightCircleFill /> Staking{" "}
                </button>{" "}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                {" "}
                <button className='header11' >
                  {" "}
                  <MdOutlineAccountBalanceWallet
                  className='header12'
                  />{" "}
                </button>{" "}
              </Nav.Link>
              <Nav.Link eventKey={2} href="/">
                <button className='header13'>
                  {" "}
                  <BsThreeDots />{" "}
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default Header