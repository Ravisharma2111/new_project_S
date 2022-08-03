import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import './App.css';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import bitcoin from "./bitcoin.jpg";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import './index.css'
import { SiTwitter } from "react-icons/si";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineEqualizer } from "react-icons/md";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import Card from "react-bootstrap/Card";
// import photo from "./faviconm.jpg";

import { MdExpandMore } from "react-icons/md";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import data from "./Data.json"

function App() {
  return (
    <div className="app1" >
    <Header/>
     <Section/>
      <div className="app2" >
        <Card  className="app3"  >
          <Card.Body  className="app4"   >
          <div className="app5"  >
            <Card.Title className="app6">
              {" "}
              Welcome to the Synchrony App{" "}
            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted" style={{paddingTop: '25px'}}>
              Synchrony is an on-chain copy-trading and composable indexing
              protocol with a friendly Solana marketplace providing in-depth
              analytics to enable users to research other users wallets and
              their strategies.
             </Card.Subtitle>
            </div>
            <span  className="app8"  >
            <img alt="hello" src={bitcoin} style={{width: '160px', height: '160px'}}  />
            </span>
          
         </Card.Body>
        </Card>
      </div>
      <div className="app10" >
      <input  className="app11"  class="icon-rtl"  placeholder="Search"/>
      </div>
      <div  className="app12"  >
        <Container
        className="app13" >
          <Table  className="app14" >
            <thead>
              <tr  className="app15"  >
                <th> Ranking </th>
                <th> Name</th>
                <th> Category </th>
                <th>Market Cap </th>
                <th> Performance 24H </th>
                <th> Twitter Followers </th>
                <th></th>
              </tr>
            </thead>
           
            { data.map((index,i) => {
              return(
              
                <tbody className="app15">
                <tr>
                <td>{index.id}</td>
                <td>{index.name}</td>
                <td>{index.Category}</td>
                <td>{index.Market}</td>
                <td>{index.Performance}</td>
                <td>{index.Twitter} &nbsp;<SiTwitter/>   </td>

                <td>
                 {index.img}   <MdExpandMore />
                </td>
              </tr>
              </tbody>
             
                )
            })



            }
              
             
          
          </Table>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
