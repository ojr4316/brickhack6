import React, { Component } from 'react';

import CSS from 'csstype';

interface Props {
  title: string,
  location: string,
  img: string,
  type: string
}

interface State {}

export default class Post extends Component<Props, State> {
  render() {
    return (
      <div style={post}>
        <img style={imgStyle} alt="object pic" src={this.props.img}/>
<<<<<<< HEAD
        <p style={grayText}>  I'm looking for a <span style={brightText}> {this.props.title} </span> </p>
=======
        <p style={grayText}>  I {this.props.type} a <span style={brightText}> {this.props.title} </span> </p>
>>>>>>> af5b1028adfea2ec9314082f2c75da5445d985ee
        <p style={grayText}> {this.props.location} </p>
      </div>
    );
  }
}

function typeText(this: any){ (this.props.type === 'want') ? document.documentElement.style.setProperty("--t", "#767696") : document.documentElement.style.setProperty("--b", "#767696"); }

const post : CSS.Properties = {
  border: "2px solid #DE9151", 
  borderRadius: "10px", 
  margin: "16px",
  padding: "16px",
  width: "300px",
  height: "250px",
  textAlign: "center",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.3)"
}


const imgStyle = {
  width: "200px",
  height: "200px"
}

const grayText = {
  color: "var(--t)"
}

const brightText = {
  color: "#DE9151"
}
