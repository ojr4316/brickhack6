import React, { Component } from 'react';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import logo from '../img/icon.png';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">
  <img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <h1 className="d-inline-block ml-3"> Paperclip </h1>
  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>


    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Hi Owen
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-right">
        <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Navbar.Collapse>
</Navbar>
    </div>
      );
    }
  }