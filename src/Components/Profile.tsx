import React, { Component, CSSProperties } from 'react';
import '../App.css';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <button>Back</button>
        <div style={divStyle}>
            <img alt="profile pic" src="https://www.sackettwaconia.com/wp-content/uploads/default-profile.png" style={{height: "100px", width: "100px"}}/>
            <h3>Name</h3>
            <h5>Location</h5>
        </div>
        <table style={{border: "1px solid black", margin: "auto"}}>Posts</table>
        <button style={{marginLeft: "95%"}}>Add Post</button>
      </div>
    );
  }
}

const divStyle: CSSProperties = {
    margin: "0 45% 0 45%",
    paddingTop: "10px",
    textAlign: "center"
}