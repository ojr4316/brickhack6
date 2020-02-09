import React, { Component } from 'react';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import logo from '../img/icon.png';
import {Link} from 'react-router-dom';
import {auth} from 'firebase';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
  <Navbar bg="dark" expand="lg" style={{backgroundColor: "#311847!important"}}>
  <Navbar.Brand href="#home">
  <img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <h1 className="d-inline-block ml-3 text-white"> <Link to='/' style={{color: "white"}}>Paperclip</Link> </h1>
  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>


    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: "transparent", borderColor: "#E87F1C"}}>
        {(auth().currentUser?.displayName != null) ? auth().currentUser?.displayName : auth().currentUser?.email}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-right">
        <Link className="m-3" to="/profile">View Profile</Link>
        <hr/>
        <Link className="m-3" to='/settings'>Settings</Link>
        <hr/>
        <Link className="m-3" onClick={() => {
          auth().signOut();
        }} to="/login">Logout</Link>
        
      </Dropdown.Menu>
    </Dropdown>
  </Navbar.Collapse>
</Navbar>
    </div>
      );
    }
  }