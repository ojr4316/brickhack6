import React, { Component } from 'react';
import {auth} from 'firebase';

interface State {
    img: any;
    name: string;
    phone: string;
    loc: string;
}
interface Props {}

export default class Settings extends Component {

    state = {
        img: null,
        name: null,
        phone: null,
        loc: null
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
        const user = auth().currentUser;
        if (user != null) {
            user.updateProfile({
                displayName: this.state.name,
                photoURL: this.state.img
            });
            user.phoneNumber = this.state.phone;
        }
      }

    render() {
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input ref="imageUpload" name="img" type="file" accept="image/*" onChange={this.upload}/>
                    <br/>
                    <input type="text" name="name" onChange={e => this.setState({"name": e.target.value})} placeholder="Display Name"/>
                    <br/>
                    <input type="number" name="phone" onChange={e => this.setState({"phone": e.target.value})} placeholder="Phone Number"/>
                    <br/>
                    <input type="text" name="loc" onChange={e => this.setState({"loc": e.target.value})} placeholder="Location"/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}