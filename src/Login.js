
import Navbar from "react-bootstrap/Navbar";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { MdOutlineEqualizer } from "react-icons/md";

import photo from "./faviconm.jpg";
import './index.css'
import './Header.css'

import { useNavigate} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";



import React, {useEffect } from "react";
import './Login.css'

import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
  const navigate = useNavigate();
 
const loginpage = () => {
  localStorage.setItem('login',true)
  navigate('/')
}
useEffect(() => {
  let login = localStorage.getItem('login')
  if(login){
      navigate('/')
  }
})



  return (
    <div  className='login2' >
   <div>
   <Navbar className='header1'
        collapseOnSelect
        expand="lg"
      >
        <img
        alt="hello"
        className='header2'
          src={photo}
        />
        <Navbar.Brand className='header3' >
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
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
   
   
   
   
   </div>
    <div className="App login1">
      <div className="container login3">
        <div className="row d-flex justify-content-center">
        <h5 className="login5" ><strong>Login </strong></h5>
          <div className="col-md-4">
            <form id="loginform" >
              <div className="form-group">
                <label style={{color:'white'}} >Email Address:</label>
                <input
                  type="email"
                  className="form-control login2"
                 
                  
                
                  placeholder="Enter email"
                 
                />
              </div>
              <div className="form-group">
                <label style={{color:'white'}} >Password</label>
                <input
                  type="password"
                  className="form-control login2"
                
                  placeholder="Password"
                 
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input login2"
              
                />
                <label style={{color:'white'}}  className="form-check-label">Check me out</label>
              </div>
              <button onClick={loginpage} type="submit" className="btn btn-primary login4">
                Submit
              </button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;
