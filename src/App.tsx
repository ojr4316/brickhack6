import React, { Component } from 'react';
import './App.css';
import CSS from 'csstype';

export default class App extends Component {
  render() {
    return (
      <div style={style1}>
        <h1> Paperclip </h1>

      </div>
    );
  }
}

const style1 : CSS.Properties = {
  textAlign: "center",
  backgroundColor: "purple"
}