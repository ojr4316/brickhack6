import React, { Component } from 'react';
import './App.css';
import CSS from 'csstype';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
import Create from './Components/Create';
import axios from 'axios';

interface post {
  type: number,
  request: string,
  img: string,
  location: string
}

interface Props {}

interface State {
  posts: post[]
}

export default class App extends Component {

  state = {
    posts: [{
      type: -1,
      request: "",
      img: "",
      location: ""
    }]
  }

  componentDidMount() {
    let p : any = [];

    axios.get('http://redpaperclip.online/getRequests.php').then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        p.push({
            type: response.data[i].type, 
            request: response.data[i].request,
            img: response.data[i].img,
            location: response.data[i].location
          });
      }
      this.setState({posts: p});
    });

    
  }

  render() {
    let p : any = [];

    for (let i = 0; i < this.state.posts.length; i++) {
      p.push(<Post type={this.state.posts[i].type.toString()} title={this.state.posts[i].request} location={this.state.posts[i].location} img={this.state.posts[i].img}/>);
    }

    return (
      <div style={body}>
        <Navbar />
       
        <Create />
        <div style={postStyle}> 
          {p}
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