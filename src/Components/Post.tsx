import React, { Component } from 'react';
import '../App.css';

export default class Post extends Component {
  render() {
    return (
      <div style={{border: "1px solid black", borderRadius: "10px", height: "150px", width: "200px"}}>
        <img style={{height: "60%", width: "80%", margin: "auto"}} alt="object pic" src="https://www.meijer.com/content/dam/meijer/product/0033/31/7198/72/0033317198726_a1c1_1200.png"/>
        <p style={{margin: "1%"}}>Calculator<p style={{margin: "1%"}}>Location</p></p>
      </div>
    );
  }
}
