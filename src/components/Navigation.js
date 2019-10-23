import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap'
import me from './images/dev.png'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (

    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand>
        <Link to='/'>
          <Image src={me} roundedCircle />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link ><Link to='/objective'>Objective</Link></Nav.Link>
          <Nav.Link><Link to='/skills'>Skills</Link></Nav.Link>
          <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


  );

}

export default Navigation