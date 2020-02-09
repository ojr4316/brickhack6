import React, { Component } from 'react';
import '../App.css';
import CSS from 'csstype';
import Post from './Post';
import Navbar from './CustomNavbar';
import Create from './Create';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import firebase from 'firebase';

interface post {
  wants: string,
  request: string,
  img: string,
  location: string,
  id: number,
  description: string,
  userId: string
}

interface Props {
}

interface State {
  posts: post[],
  page: number,
  selected: number
}

export default class Home extends Component<Props, State> {

  state = {
    posts: [{
      wants: "",
      request: "",
      img: "",
      location: "",
      id: -1,
      description: "",
      userId: ""
    }],
    page: 0,
    selected: -1
  }

  componentDidMount() {
    let p : any = [];

    axios.get('http://redpaperclip.online/getRequests.php').then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        p.push({
            wants: response.data[i].wants, 
            request: response.data[i].request,
            img: response.data[i].img,
            location: response.data[i].location,
            id: response.data[i].id,
            description: response.data[i].description,
            userId: response.data[i].userId
          });
      }
      this.setState({posts: p});
    });
  }

  toggleCreate = () => {
    if (this.state.page > 0) {
      this.setState({page: 0});
    } else {
      this.setState({page: 1});
    }
  }

  render() {

    if (firebase.auth().currentUser === null) {
      return <Redirect push to="/login" />;
    }

    let p : any = [];

    for (let i = 0; i < this.state.posts.length; i++) {
      p.push(<Post selected={this.state.selected} setSelected={(i: number) => this.setState({selected: i})} uid={this.state.posts[i].userId} description={this.state.posts[i].description} id={this.state.posts[i].id} wants={this.state.posts[i].wants} title={this.state.posts[i].request} location={this.state.posts[i].location} img={this.state.posts[i].img}/>);
    }

    return (
      <div style={body}>
        <Navbar />
       
        <Create visible={this.state.page === 1} closeCreate={this.toggleCreate}/>
        <div style={postStyle}> 
          {p}
        </div>

        <div style={addButton} onClick={this.toggleCreate}>
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
