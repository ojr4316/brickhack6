import React, { Component } from 'react';
import firebase from 'firebase';
import {Redirect, Link} from 'react-router-dom';
import CSS from 'csstype';
import logo from '../img/icon.png';
import RubberBand from 'react-reveal/RubberBand';

interface State {
    email: string;
    pass: string;
    msg: string;
}

interface Props {
}

export default class SignUp extends Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {
            email: "",
            pass: "",
            msg: ""
        }
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                console.log(firebaseUser);
            } else {
                console.log('not logged in');
            }
        });
    }

    handleEmail = (e) => {
        this.setState({"email": e.target.value});
    }

    handlePass = (e) => {
        this.setState({"pass": e.target.value});    
    }

    render() {
        if (firebase.auth().currentUser !== null) {
            return <Redirect push to="/" />;
        }

        return (
            <div style={body}>
                <RubberBand><img src={logo} style={logoStyle} className="p-3" alt="logo"/></RubberBand>
                <div>
                <form onSubmit={this.func}>
                    <h1><span style={{color: "#E81C25"}}>Red</span> Paperclip</h1>
                    <h3 style={{color: "#808080"}}> Register </h3>
                    <p style={{height: "1em", color: "red"}}>{this.state.msg}</p>
                    <input style={inputStyle} className="my-1"type="text" placeholder="E-mail" value={this.state.email} name="email" onChange={this.handleEmail}/>
                    <br/> 
                    <input style={inputStyle} className="my-1"type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handlePass}/>
                    <br/>
                    <input style={{width: "100%", color: "#F0F0F0", backgroundColor: "#E87F1C"}} className="button-full my-2" type="submit" value="Sign Up"/>
                </form>
                <button style={{width: "100%", color: "#F0F0F0"}} ><Link style={{color: "black"}} to="/login">Login</Link></button>
                </div>
            </div>
        );
    }

    func = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.pass);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch((e) => {
            this.setState({"msg": e.message});
        });
    }
}

const body : CSS.Properties = {
    backgroundColor: "#F0F0F0",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
  
const logoStyle : CSS.Properties = {
    width: "300px",
    height: "auto"
}

const inputStyle : CSS.Properties = {
    fontSize: "1.25em"
}