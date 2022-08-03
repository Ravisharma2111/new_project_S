import React from 'react'
import './Section.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Section() {
  return (
    <Navbar className='section1'>
        <Container >
        
            <Nav>
              <Nav.Link className='section2'  href="/home">Ecosystem Overview</Nav.Link>
              <Nav.Link  className='section3'  href="/walletanalytics">Wallet Analytics</Nav.Link>
              <Nav.Link  className='section3'  href="/transactionhistory">Transaction History</Nav.Link>
              <Nav.Link  className='section3'   href="/comparewallets"> Compare Wallets </Nav.Link>
            </Nav>
        
        </Container>
      </Navbar>
  )
}

export default Section