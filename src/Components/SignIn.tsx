import React, { Component } from 'react';
import CSS from 'csstype';
import firebase from 'firebase';

export default class SignIn extends Component {

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <input id="email" type="email" placeholder="E-mail"></input>
                <input id="pass" type="password" placeholder="Password"></input>
                <button id="signup">Sign Up</button>
                <p>———— or ————</p>
                <button>Log In</button>
            </div>
        );
    }
}

var config = {
    apiKey: "AIzaSyAWOtVU3nXn-VRkJo3T9sQxnSrm0pO1Fgs",
    authDomain: "paperclip-c1642.firebaseapp.com",
    databaseURL: "https://paperclip-c1642.firebaseio.com",
    projectId: "paperclip-c1642",
    storageBucket: "paperclip-c1642.appspot.com",
    messagingSenderId: "570120231969",
    appId: "1:570120231969:web:da93453502776106129760",
    measurementId: "G-WRQ0DRJR5G"
  };
firebase.initializeApp(config);

const emailBox = document.getElementById('email');
const passBox = document.getElementById('pass');
document.getElementById('signup')?.addEventListener('click', e => {
    console.log('event activated');
    const email = emailBox?.nodeValue;
    const pass = passBox?.nodeValue;
    console.log(email, pass);
    if (email != null && pass != null)
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(e => console.log(e.message));
    else
        console.log('email or password is empty');
})
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser)
        console.log(firebaseUser);
    else
        console.log('not logged in');
})