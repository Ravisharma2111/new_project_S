import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import './CompareWallets.css'
import './index.css'
import { FiEdit2 } from "react-icons/fi";
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineEqualizer } from "react-icons/md";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import Card from "react-bootstrap/Card";
// import photo from "./faviconm.jpg";
import Footer from './Footer';
import Header from './Header';
import Section from './Section';


function CompareWallets() {
  return (
    <div className='compare1' >
   <Header/>
    <Section/>
    <div  className='compare2'>
    <Card.Title  className='compare3'   >
    Wallet Analytics
    </Card.Title>
    </div>
    <div  className='compare4' >
  <Container  className='compare5'  >

  <Table style={{padding: "4px",dispaly:'flex', }}>
  <thead>
    <tr>
      <th> List	 </th>
     
      <th  className='compare7' ><FiEdit2/> Add Wallet  </th>
   
    </tr>
  </thead>
  <tbody  className='compare8' >
    <tr>
      <td>Wallet Address</td>
      <td></td>
      <td>Total</td>
   
      <td>Action</td>

      <td>
      
      </td>
    </tr>
    </tbody>
    </Table>
    </Container>
    </div>
    <div className='compare9'>
  <Container className='compare10' >

  <Table className='compare11' >
  
    <tr className='compare8'>
      <th > Balance	 </th>
    </tr>
 
  
    <tr className='compare8' >
      <td>1.0</td>
    </tr>
   
    <tr className='compare8' >
      <td>0.8</td>
    </tr>
    <tr className='compare8' >
    <td>0.5</td>
  </tr>
  <tr className='compare8' >
  <td>0.3</td>
</tr>
<tr className='compare8' >
<td>0</td>
</tr>

    </Table>
    </Container>
    </div>
  <Footer/>
    </div>
  )
}

export default CompareWallets