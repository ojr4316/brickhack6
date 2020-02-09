import React, { Component } from 'react';
import CSS from 'csstype';
import axios from 'axios';

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
      <div>
        <form onSubmit={this.submit}>
            <p> Short Name </p>
            <input onChange={this.handleChange} name="request" placeholder="Enter Name Here"/>
            <br/>   
            <p> Description </p>
            <input onChange={this.handleChange} name="description" placeholder="Enter Short Description Here"/>

            <p> I want this item </p>
            <input onChange={this.handleChange} type="radio" name="type" value="0"/>
            <p> I have this item </p>
            <input onChange={this.handleChange} type="radio" name="type" value="1"/>
            <br/>
            <input ref="imageUpload" name="img" type="file" accept="image/*" onChange={this.upload}/>
            <input type="submit" value="Add"/>

        </form>
      </div>
    );
  }
}