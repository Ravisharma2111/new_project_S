import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import photo from "./faviconm.jpg";
// import { MDBSwitch } from 'mdb-react-ui-kit';
// import bitcoin from "./bitcoin.jpg";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './index.css'
import './WalletAnalytics.css'

import { MdExpandMore } from "react-icons/md";
import { FcShipped } from "react-icons/fc";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineEqualizer } from "react-icons/md";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Footer from './Footer';
import Header from './Header';
import Section from './Section';

function WalletAnalytics() {
  return (
    
    <div className='wallet1' >
  
<Header/>

   <Section/>
   
    <div  className='wallet2'>
     <Form className="d-flex">
    <Form.Control
      type="search"
      
     
      className="me-2 wallet3"
       />
    <button className='wallet4'>Search</button>
  </Form>
  </div>
  <div className='wallet5' >
  <Card.Title className='wallet6' >
  Wallet Analytics
  </Card.Title>
  </div>
  <div className='wallet7' >
  <Container className='wallet8'  ><Card.Title className='wallet9'> HISTORY </Card.Title>
  <h3 className='wallet9' >$0</h3>

  </Container>
  <Container className='wallet10' ><strong className='wallet9' > Portfolio Allocation </strong> </Container>
  </div>
  <div> <input type="checkbox"/></div>
  <div className='wallet11'>
  <Container className='wallet12'>

  <Table className='wallet13'>
  <thead>
    <tr className='wallet9'>
      <th> Nick name	 </th>
      <th> Wallet Address</th>
      <th> Net Worth </th>
      <th>Number of Assets	</th>
      <th> Performance  </th>
    <th></th>
    <th></th>
    </tr>
  </thead>
  <tbody className='wallet9'>
    <tr>
      <td>Wallet Name</td>
      <td>Address</td>
      <td>12.27</td>
      <td><FcShipped/> +1</td>
      <td> 2.65</td>
      <td> &nbsp;  <MdExpandMore />   </td>

      <td>
      
      </td>
    </tr>
    </tbody>
    </Table>
    </Container>
    </div>
    <Footer/>

  </div> 
  
  )
}

export default WalletAnalytics