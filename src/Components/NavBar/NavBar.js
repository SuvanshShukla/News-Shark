import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import news_shark_png2 from './news_shark_png2.png';


function NavBar({savedList, markRead, getdata, getQueryNews, getKeyword}) {
  
  return ( 
  <Navbar bg="dark" variant="dark">
      <NavDropdown title="Saved Articles" id="basic-nav-dropdown">
        {getdata()}
        {savedList?savedList.map((x,i)=> //there was a problem with the initail build because it would't work in incognito so we had to make arrangements for an empty array of saved articles
          <NavDropdown.Item>{x.title}
          <Button bg="dark" onClick={()=>{markRead(i)}}> Mark as Read!</Button> 
        </NavDropdown.Item>
        ):null}                
      </NavDropdown>
    <Navbar.Brand href="#home" text="justiy-content-center">News <Image src={news_shark_png2} width="50px" height="50px"/> Shark</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link target="_blank" href="https://github.com/SuvanshShukla">Check Out My GitHub</Nav.Link>
    </Nav>
    <input type="text" placeholder="Search for any keyword" onChange={(e)=>{getKeyword(e)}}/>
    <input type="submit" onClick={()=>{getQueryNews()}}/>
  </Navbar> 
  )
}

export default NavBar;