import React, { Component } from 'react';
import CSS from 'csstype';
import axios from 'axios';
import {ButtonGroup, ToggleButton} from 'react-bootstrap';

interface Props {}
interface State {
    type: number
    request: string
    description: string
}

export default class Create extends Component {

    state = {
        type: 0,
        request: "",
        description: "",
        img: null
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    upload = (e) => {
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
            type: this.state.type,
            request: this.state.request,
            description: this.state.description,
            img: this.state.img
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  render() {
    return (
      <div style={greyBg}>
        <form onSubmit={this.submit} style={create}>
            <p style={label}> Short Name </p>
            <input style={inputStyle} onChange={this.handleChange} name="request" placeholder="Enter Name Here"/>
            <br/>   
            <p style={label}>  Description </p>
            <input style={inputStyle} onChange={this.handleChange} name="description" placeholder="Enter Short Description Here"/>

            <ButtonGroup toggle style={{margin: "16px"}}>
            <ToggleButton type="radio" name="type" defaultChecked value="0">
              Want this item
            </ToggleButton>
            <ToggleButton type="radio" name="type" value="1">
              Have this item
            </ToggleButton>
          </ButtonGroup>
            <br/>
            <input ref="imageUpload" name="img" type="file" accept="image/*" onChange={this.upload}/>
            <input type="submit" value="Add"/>

        </form>
      </div>
    );
  }
}

const greyBg : CSS.Properties = {
  position: "absolute",
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