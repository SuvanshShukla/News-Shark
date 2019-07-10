import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import news_shark_png from './news_shark_png.png';


function NavBar({savedList, markRead, getdata, getQueryNews, getKeyword}) {
  
  return ( 
  <Navbar bg="dark" variant="dark">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        {getdata()}
        {savedList.map((x,i)=>
          <NavDropdown.Item>{x.title}
          <Button bg="dark" onClick={()=>{markRead(i)}}> Mark as Read!</Button> 
        </NavDropdown.Item>
        )}                
      </NavDropdown>
    <Navbar.Brand href="#home">News <Image src={news_shark_png} width="50px" height="50px" fluid/> Shark</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link target="_blank" href="https://github.com/SuvanshShukla">Check Out My GitHub</Nav.Link>
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    <input type="text" placeholder="Search for any keyword" onChange={(e)=>{getKeyword(e)}}/>
    <input type="submit" onClick={()=>{getQueryNews()}}/>
  </Navbar> 
  )
}

export default NavBar;