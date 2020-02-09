import React, { Component } from 'react';
import CSS from 'csstype';
import firebase from 'firebase';

interface State {
    email: string;
    pass: string;
}

interface Props {}

export default class LogIn extends Component<Props, State> {
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
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
                    <h1>Log In</h1>
                    <input type="text" placeholder="E-mail" value={this.state.email} name="email" onChange={this.handleEmail}/>
                    <br/> 
                    <input type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handlePass}/>
                    <br/>
                    <button>Log In</button>
                </form>
            </div>
        );
    }

    func = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.pass);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(e => console.log(e.message));
    }
}