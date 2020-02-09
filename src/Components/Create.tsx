import React, { Component } from 'react';
import CSS from 'csstype';
import axios from 'axios';
import { auth } from 'firebase';
interface Props {
  visible: boolean,
  closeCreate: any
}
interface State {
    wants: string
    request: string
    description: string
    img: any,
    location: string
}

export default class Create extends Component<Props, State> {

    state = {
        wants: "",
        request: "",
        description: "",
        img: null,
        location: ""
    }

    upload = (e : any) => {
      let reader = new FileReader();
      reader.onload = (event) => {
        if (event.target != null) {
          this.setState({img: event.target.result});
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
        
    submit = (e) => {
      e.preventDefault();
      axios.post('http://redpaperclip.online/addRequest.php', {
          wants: this.state.wants,
          request: this.state.request,
          description: this.state.description,
          img: this.state.img,
          uid: auth().currentUser?.uid,
          location: this.state.location
        })
        .then((response) => {
          this.props.closeCreate();
        })
        .catch(function (error) {
          console.log(error);
        });
      window.location.reload(false);
    }

  render() {
    return (
      <div style={this.props.visible ? greyBg : {display: "none"}} onClick={this.props.closeCreate}>
        <form onSubmit={this.submit} style={create} onClick={(e) => e.stopPropagation()}>
            <p style={label}> Short Name </p>
            <input style={inputStyle} onChange={(e) => this.setState({request: e.target.value})} name="request" placeholder="Enter Name Here"/>
            <br/>   
            <p style={label}>  Description </p>
            <input style={inputStyle} onChange={(e) => this.setState({description: e.target.value})} name="description" placeholder="Enter Short Description Here"/>
      
            <p style={label}> What I want </p>
            <input style={inputStyle} onChange={(e) => this.setState({wants: e.target.value})} name="wants" placeholder="Enter Wants Here"/>

            <p style={label}> My Location </p>
            <input style={inputStyle} onChange={(e) => this.setState({location: e.target.value})} name="location" placeholder="Enter Location Here"/>

            <br/>
            <input ref="imageUpload" name="img" type="file" accept="image/*" onChange={this.upload}/>
            <input type="submit" value="Add"/>

        </form>
      </div>
    );
  }
}

const greyBg : CSS.Properties = {
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const create : CSS.Properties = {
  position: "absolute",
  backgroundColor: "white",
  padding: "16px",
  zIndex: 101

}

const inputStyle : CSS.Properties = {
  width: "100%",
  fontSize: "1.25em"
}

const label : CSS.Properties = {
  fontSize: "1.25em",
  padding: 0,
  margin: 0
}