import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './index.css'
import './TransactionHistory.css'
import { FcDataBackup } from "react-icons/fc";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineEqualizer } from "react-icons/md";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import Card from "react-bootstrap/Card";
// import photo from "./faviconm.jpg";
import Footer from './Footer';
import Header from './Header';
import Section from './Section';

function TransactionHistory() {
  return (
    <div className='history1'>
     <Header/>
     <Section/>
      <div className='history2' >
      <Form className="d-flex">
     <Form.Control type="search" className="me-2 history3" />
     <button className='history4'>Search</button>
   </Form>
   </div>
   <div className='history5' >
  <Card.Title className='history6'  >
  Transaction History
  </Card.Title>
  </div>
  <div className='history7' >
  <Container  className='history8' >

  <Table  className='history9'>
  <thead>
    <tr className='history10' >
      <th> Signature	 </th>
      <th> Type </th>
      <th> Date </th>
      <th> Token Account	</th>
      <th> Change Amount	  </th>
    <th> From/To </th>
    <th></th>
    </tr>
    <td></td>
    <td></td>
    <td></td>
    <td> 
    <FcDataBackup size={70} />
    <Card.Title  className='history10' > No Data </Card.Title>
   </td>
  </thead>
    </Table>
    </Container>
    </div>
   <Footer/>
      </div>
  )
}

export default TransactionHistory