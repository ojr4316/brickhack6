import React, { Component } from 'react';

import CSS from 'csstype';

interface Props {
  title: string,
  location: string,
  img: string,
  wants: string,
  id: number
}

interface State {}

export default class Post extends Component<Props, State> {
  render() {
    return (
      <div style={post}>
        <img style={imgStyle} alt="object pic" src={this.props.img}/>
        <p style={grayText}>  I have a <span style={brightText}> {this.props.title} </span> </p>
        <p style={grayText}>  I want <span style={brightText}> {this.props.wants} </span> </p>
        <p style={grayText}> {this.props.location} </p>
        <p> {this.props.id} </p> 
      </div>
    );
  }
}

const post : CSS.Properties = {
  border: "2px solid #DE9151", 
  borderRadius: "10px", 
  margin: "16px",
  padding: "16px",
  width: "300px",
  height: "400px",
  textAlign: "center",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.3)"
}


const imgStyle : CSS.Properties = {
  width: "200px",
  height: "200px",
  objectFit: "cover"
}

const grayText = {
  color: "var(--t)"
}

const brightText = {
  color: "#DE9151"
}
