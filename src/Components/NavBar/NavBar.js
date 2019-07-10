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


function NavBar({savedList, markRead, getdata}) {
  return ( 
  <Navbar bg="dark" variant="dark">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        {getdata()}
        {savedList.map((x,i)=>
          <NavDropdown.Item>{x.title}
          <Button bg="dark" onClick={()=>{markRead(i)}}>Read!</Button> 
        </NavDropdown.Item>
        )}                
      </NavDropdown>
    <Navbar.Brand href="#home">News <Image src={news_shark_png} width="50px" height="50px"/> Shark</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar> 
  )
}

export default NavBar;