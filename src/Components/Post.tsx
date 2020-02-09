import React, { Component } from 'react';
import '../App.css';
import {auth} from 'firebase';
import CSS from 'csstype';
import axios from 'axios';

interface Props {
  title: string,
  location: string,
  img: string,
  wants: string,
  id: number,
  uid: string,
  description: string,
  selected: number,
  setSelected: any
}

interface State {}

export default class Post extends Component<Props, State> {

  trySelect = () => {
    if (this.props.selected === this.props.id) {
      this.props.setSelected(-1);
    } else {
      this.props.setSelected(this.props.id);
    }
  }

  delete = () => {

  };

  startChat = () => {
    if (auth().currentUser?.uid !== this.props.uid) {
      axios.post('http://redpaperclip.online/addChat.php', {
        uidFrom: auth().currentUser?.uid,
        uidTo: this.props.uid
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
    

  render() {
    let isOwner:boolean = auth().currentUser?.uid === this.props.uid;
    let extraStuff;
    if (this.props.selected === this.props.id) {
      extraStuff = <div><p style={grayText}>  I want <span style={brightText}> {this.props.wants} </span> </p><h5 style={{color: "grey"}}> Location </h5>
      <p style={grayText}> {this.props.location} </p><h5 style={{color: "grey"}}>Description</h5><p> {this.props.description} </p>
      <p> Trade ID: {this.props.id} </p> <button onClick={isOwner ? this.delete : this.startChat}> {isOwner ? "Delete" : "Message" } </button> </div>;
    }


    return (
      <div className={this.props.selected === this.props.id ? "post-selected" : "post-normal"} style={post} onClick={this.trySelect}>
        <img style={{...imgStyle, ...{ display: (this.props.img === "" ? "none" : "initial") } }} alt="object pic" src={this.props.img}/>
        <p style={grayText}>  I have a <span style={brightText}> {this.props.title} </span> </p>
        
        {extraStuff}
        
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
  height: "300px",
  textAlign: "center",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.3)",
  backgroundColor: "white"
}


const imgStyle : CSS.Properties =  {
  width: "75%",
  height: "50%",
  objectFit: "contain"
}

const grayText = {
  color: "var(--t)"
}

const brightText = {
  color: "#DE9151"
}
