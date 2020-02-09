import React, { Component } from 'react';
import CSS from 'csstype';
import firebase from 'firebase';

interface State {
    email: string;
    pass: string;
}

interface Props {}

export default class SignIn extends Component<Props, State> {

    config = {
        apiKey: "AIzaSyAWOtVU3nXn-VRkJo3T9sQxnSrm0pO1Fgs",
        authDomain: "paperclip-c1642.firebaseapp.com",
        databaseURL: "https://paperclip-c1642.firebaseio.com",
        projectId: "paperclip-c1642",
        storageBucket: "paperclip-c1642.appspot.com",
        messagingSenderId: "570120231969",
        appId: "1:570120231969:web:da93453502776106129760",
        measurementId: "G-WRQ0DRJR5G"
      };
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
        firebase.initializeApp(this.config);
        const root = firebase.database().ref().child('react');
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser)
                console.log(firebaseUser);
            else
                console.log('not logged in');
        })
    }

    handleEmail = (e) => {
        this.setState({"email": e.target.value});   
        console.log(this.state.email); 
    }

    handlePass = (e) => {
        this.setState({"pass": e.target.value});    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.func}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="E-mail" value={this.state.email} name="email" onChange={this.handleEmail}/>
                    <br/> 
                    <input type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handlePass}/>
                    <br/>
                    <button>Sign Up</button>
                    <p>———— or ————</p>
                    <button>Log In</button>
                </form>
            </div>
        );
    }

    func = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.pass);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(e => console.log(e.message));
    }
}