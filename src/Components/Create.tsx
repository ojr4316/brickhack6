import React, { Component } from 'react';
import CSS from 'csstype';
import axios from 'axios';
import { auth } from 'firebase';
import Fade from 'react-reveal/Fade';
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
        
    submit = (e: any) => {
      e.preventDefault();
      axios.post('http://redpaperclip.online/addRequest.php', {
          wants: this.state.wants,
          request: this.state.request,
          description: this.state.description,
          img: this.state.img,
          uid: auth().currentUser?.uid,
          username: auth().currentUser?.displayName === null ? auth().currentUser?.email : auth().currentUser?.displayName,
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
        <Fade bottom>
        <form onSubmit={this.submit} style={create} onClick={(e) => e.stopPropagation()}>
            <div className="close" onClick={this.props.closeCreate}>X</div>
            <h2> Create a Trade Offer </h2>
            <hr />
            <p style={label}> What do you have? </p>
            <input style={inputStyle} className="mb-3" onChange={(e) => this.setState({request: e.target.value})} name="request" placeholder="Enter Name Here"/>
              
            <p style={label}>  How would you describe it? </p>
            <input style={inputStyle} className="mb-3" onChange={(e) => this.setState({description: e.target.value})} name="description" placeholder="Enter Short Description Here"/>

            <p style={label}> What do you want for it? </p>
            <input style={inputStyle} className="mb-3" onChange={(e) => this.setState({wants: e.target.value})} name="wants" placeholder="Enter Wants Here"/>

            <p style={label}> Around where are you? </p>
            <input style={inputStyle} className="mb-3" onChange={(e) => this.setState({location: e.target.value})} name="location" placeholder="Enter Location Here"/>

            <input ref="imageUpload" className="mb-3" name="img" type="file" accept="image/*" onChange={this.upload}/>
            <input type="submit" value="Add To Paperclip"/>

        </form>
        </Fade>
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
  zIndex: 101,
  margin: "16px"

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