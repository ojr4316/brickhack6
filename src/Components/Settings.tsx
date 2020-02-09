import React, { Component } from 'react';
import {auth} from 'firebase';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

interface State {
    img: any;
    name: string;
    phone: string;
}
interface Props {}

export default class Settings extends Component {

    state = {
        img: auth().currentUser?.photoURL,
        name: auth().currentUser?.displayName,
        phone: auth().currentUser?.phoneNumber
    }
    
    upload = (e) => {
        let reader = new FileReader();
        reader.onload = (event) => {
          if (event.target !== null) {
            this.setState({img: event.target.result});
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }

    submit = (e) => {
        e.preventDefault();
        const user = auth().currentUser;
        if (user != null) {
            user.updateProfile({
                displayName: this.state.name,
                photoURL: this.state.img
            });
            user.phoneNumber = this.state.phone !== undefined ? this.state.phone : '';
        }
      }

    render() {
        if (auth().currentUser === null)
        return <Redirect push to="/login" />
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input ref="imageUpload" name="img" type="file" accept="image/*" onChange={this.upload}/>
                    <br/>
                    <input type="text" name="name" onChange={e => this.setState({"name": e.target.value})} placeholder="Display Name" value={this.state.name !== null ? this.state.name : ''}/>
                    <br/>
                    <input type="number" name="phone" onChange={e => this.setState({"phone": e.target.value})} placeholder="Phone Number" value={this.state.phone !== null ? this.state.phone : ''}/>
                    <br/>
                    <button type="submit"><Link to='/'>Save</Link></button>
                </form>
            </div>
        );
    }
}