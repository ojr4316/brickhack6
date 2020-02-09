import React, { Component } from 'react';
import firebase from 'firebase';
import {Redirect, Link} from 'react-router-dom';

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
            msg: "Please enter your email and a password"
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
            <div>
                <form onSubmit={this.func}>
                    <h1>Sign Up</h1>
                    <p style={{height: "1em"}}>{this.state.msg}</p>
                    <input type="text" placeholder="E-mail" value={this.state.email} name="email" onChange={this.handleEmail}/>
                    <br/> 
                    <input type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handlePass}/>
                    <br/>
                    <input type="submit" placeholder="Sign Up"/>
                    <p>———— or ————</p>
                    <button><Link to="/login">Login</Link></button>
                </form>
            </div>
        );
    }

    func = (event) => {
        var m = "";
        event.preventDefault();
        console.log(this.state.email, this.state.pass);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(e) {
            m = e.message;
        });
        this.setState({"msg": m});
    }
}