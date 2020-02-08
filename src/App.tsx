import React, { Component } from 'react';
import './App.css';
import CSS from 'csstype';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
import Create from './Components/Create';

export default class App extends Component {
  

  render() {
    let posts : any = [];

    for (let i = 0; i < 10; i++) {
      posts.push(<Post type="0" title="Calculator" location="Rochester NY" img="https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg"/>);
    }

    return (
      <div style={body}>
        <Navbar />
       
        <Create />
        <div style={postStyle}> 
          {posts}
        </div>
      </div>
    );
  }
}

const postStyle : CSS.Properties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
}

const body : CSS.Properties = {
  backgroundColor: "#F0F0F0",
  minHeight: "100vh",
}