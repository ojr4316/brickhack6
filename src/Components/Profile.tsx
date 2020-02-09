import React, { Component, CSSProperties } from 'react';
import '../App.css';
import { auth } from 'firebase';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <button><Link to='/'>Back</Link></button>
        <div style={divStyle}>
            <img alt="profile pic" src={getImg()} style={{height: "100px", width: "100px"}}/>
            <h3>{auth().currentUser?.displayName !== null ? auth().currentUser?.displayName : auth().currentUser?.email}</h3>
            <h5>{auth().currentUser?.phoneNumber !== null ? auth().currentUser?.phoneNumber : 'No phone'}</h5>
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

function  getImg(){
  const user = auth().currentUser;
  if (user !== null && user.photoURL !== null)
    return user.photoURL;
  return "https://www.sackettwaconia.com/wp-content/uploads/default-profile.png";
}