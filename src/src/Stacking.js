import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineEqualizer } from "react-icons/md";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import'./Stacking.css'
// import photo from "./faviconm.jpg";
import Footer from './Footer';
import Header from './Header';

function Stacking() {
  return (
    <div  className="headerSection">
     <Header/>
          <h2 className='hedaerSection1' ><strong>Stake Synchrony </strong> </h2>
      <Card.Subtitle className="mb-2 text-muted hedaerSection2"><strong> Stake SCY to get access to our community and <br/> features </strong> </Card.Subtitle>

      <div className='hedaerSection3' >
      <button className='hedaerSection4'  >
      Stake
      </button>
      &nbsp;
      <button  className='hedaerSection5'  >
      Unstake
      </button>
      </div>
     <div  className='hedaerSection6' >
      <Card
      className='hedaerSection7'>
      <div  className='hedaerSection8' >
      <Card  className='hedaerSection9' >
        <div  className='hedaerSection10'  >
       
       <div className='hedaerSection11'>
        <button  className='hedaerSection12'  >SCY</button>
        
        <Card.Subtitle  className='hedaerSection13'  ><strong  > Balance: 0 SCY </strong> </Card.Subtitle>
        </div>
        <div className='hedaerSection14'  >
        <input className='hedaerSection15' placeholder='0.0' ></input>
        </div>
        </div>
        </Card>
        </div>
        <div className='hedaerSection16' >
        <button className='hedaerSection17'> Select Wallet </button>
        </div>
        </Card>
       
        </div>
      <div className='hedaerSection18' >
      <h1>FAQ</h1>
      </div>
      <div  className='hedaerSection19'  >
      <Accordion>
      <div className='hedaerSection20'>
      <Card className='hedaerSection21' >
     
      <Accordion.Item eventKey="0" >
      <div>
         <Accordion.Header  >What is SCY? </Accordion.Header>
         </div>
        <Accordion.Body  className='hedaerSection22'   > SCY is the Synchrony native token that allows for users to interact with the Synchrony platform, participate in the community and get access to private knowledge channels. </Accordion.Body>
    </Accordion.Item>
  
    </Card>
    </div>
    <div className='hedaerSection23'  >
      <Card className='hedaerSection24'  >
    
    <Accordion.Item  eventKey="1" >
      <Accordion.Header> What is SCY staking? </Accordion.Header>
      <Accordion.Body  className='hedaerSection25' > Without going too in depth, staking essentially means you are taking your SCY tokens and placing them on our platform to earn rewards and gain access to our various features and community functions. </Accordion.Body>
  </Accordion.Item>

  </Card> </div>
  <div className='hedaerSection26' >
  <Card className='hedaerSection27' >
  
      <Accordion.Item  eventKey="2" >
        <Accordion.Header>Can I unstake at any time? </Accordion.Header>
        <Accordion.Body  className='hedaerSection28'>You can unstake at any time, but if you unstake before the 30 day mark you will be charged a 5% early withdrawal fee.</Accordion.Body>
    </Accordion.Item>
   </Card></div>
    <div  className='hedaerSection29' >
    <Card className='hedaerSection30' >
    
    <Accordion.Item  eventKey="3" >
      <Accordion.Header> How do I claim my accumulated tokens? </Accordion.Header>
      <Accordion.Body className='hedaerSection28'>You can claim your accumulated tokens by unstaking your tokens or by staking more tokens. When you stake more tokens you add your rewarded tokens to your staked amount. This new staked amount will earn APY and will also reset the 30 day timer. </Accordion.Body>
  </Accordion.Item>
  </Card></div>

  <div className='hedaerSection29' >
  <Card className='hedaerSection30' >
 
  <Accordion.Item  eventKey="4" >
    <Accordion.Header> Are there any fees? </Accordion.Header>
    <Accordion.Body className='hedaerSection28' >There is a 5% early withdrawal penalty if you unstake your tokens before you reach the 30 day mark. This timer resets any time you stake more tokens to unlock your rewards. </Accordion.Body>
</Accordion.Item>
 </Card></div>

<div  className='hedaerSection29' >
<Card className='hedaerSection30' >

  <Accordion.Item  eventKey="5" >
    <Accordion.Header>Is there an unbonding period or delay in receiving my tokens after I unstake? </Accordion.Header>
    <Accordion.Body className='hedaerSection28' >There is not a lock up period for you to unstake your tokens. </Accordion.Body>
</Accordion.Item>
 </Card></div>
<div className='hedaerSection29' >
<Card className='hedaerSection30' >

  <Accordion.Item  eventKey="6" >
    <Accordion.Header>What are the staking mechanisms? </Accordion.Header>
    <Accordion.Body className='hedaerSection28'  >If you put tokens in it resets the timer but compounds again for you. Otherwise your rewards are held on the sideline.  </Accordion.Body>
</Accordion.Item>
</Card></div>
</Accordion> 
</div>


      <Footer/>

      </div>
  )
}

export default Stacking