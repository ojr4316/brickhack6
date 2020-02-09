import React, { Component, CSSProperties } from 'react';
import '../App.css';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
import CSS from 'csstype';
import CustomNavbar from './CustomNavbar';

export default class Profile extends Component {
  
  state = {
    user: "",
    email: ""
  }
  
  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({email: user?.email})
        this.setState({user: user?.displayName});
      }

      if (this.state.user === null) {
        this.setState({user: "Not set!"});
      } 
    });
  }

  render() {
    return (
      <div style={body}>
        <CustomNavbar />
        <button className="m-3"><Link to='/'>Back</Link></button>
        <div style={divStyle}>
            <img alt="profile pic" src={getImg()} style={{height: "100px", width: "100px"}}/>
            <h3> Username: {this.state.user}</h3>
            <h5>{this.state.email}</h5>
        </div>
      </div>
    );
  }
}

const divStyle: CSSProperties = {
    margin: "0 45% 0 45%",
    paddingTop: "10px",
    textAlign: "center"
}

function  getImg(){
  const user = firebase.auth().currentUser;
  if (user !== null && user.photoURL !== null)
    return user.photoURL;
  return "https://www.sackettwaconia.com/wp-content/uploads/default-profile.png";
}

const body : CSS.Properties = {
  backgroundColor: "#F0F0F0",
  minHeight: "100vh",
}