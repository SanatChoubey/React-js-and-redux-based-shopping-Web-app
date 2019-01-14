import React, { Component } from 'react';
import {Navbar,Nav,NavItem,}from 'react-bootstrap';
import { Link } from 'react-router-dom'





 class Header extends Component {
  render(){
    return(
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="http://localhost:3000/">summit
      </a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav>
  <NavItem > <div><Link  className ="rob" to="/stores">Store</Link></div></NavItem>
  <NavItem > <div><Link  className ="rob" to="/Account">MyAcount</Link></div></NavItem>
  <NavItem > <div><Link  className ="rob" to="/Blog">BLog </Link></div></NavItem>
</Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default Header
