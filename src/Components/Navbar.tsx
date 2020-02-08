import React, { Component } from 'react';
import CSS from 'csstype';

export default class Navbar extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={{color: "white"}}> Paperclip </h1>
       
        <select>
            <option>Profile</option>
            <option>Settings</option>
            <option>Logout</option>
        </select>
      </div>
    );
  }
}

const divStyle: CSS.Properties = {
    backgroundColor: "#2E2E3A",
    textAlign: "center"
}