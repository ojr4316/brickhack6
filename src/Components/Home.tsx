import React, { Component } from 'react';
import '../App.css';
import CSS from 'csstype';
import Post from './Post';
import Navbar from './CustomNavbar';
import Create from './Create';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

interface post {
  type: number,
  request: string,
  img: string,
  location: string
}

interface Props {
  user: any,
  setUser: any
}

interface State {
  posts: post[],
  page: number
}

export default class Home extends Component<Props, State> {

  state = {
    posts: [{
      type: -1,
      request: "",
      img: "",
      location: ""
    }],
    page: 0
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

  createPost = () => {
      
  }

  render() {

    if (this.props.user === null) {
      return <Redirect push to="/login" />;
    }

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

        <div style={addButton} onClick={this.createPost}>
          <p style={{color: "white", margin: "-8px", fontSize: "3em"}}> + </p>
        </div>

      </div>
    );
  }
}

const addButton : CSS.Properties = {
  position: "absolute",
  bottom: "16px",
  right: "16px",
  cursor: "pointer",
  backgroundColor: "#DE9151",
  width: "64px",
  height: "64px",
  borderRadius: "100%",
  textAlign: "center",
  verticalAlign: "center",
  display: "inline-block"
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