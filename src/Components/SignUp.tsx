import React, { Component } from 'react';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom';

interface State {
    email: string;
    pass: string;
    msg: string;
}

interface Props {
    user: any,
    setUser: any
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
                this.props.setUser(firebaseUser);
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
        if (this.props.user !== null) {
            return <Redirect push to="/" />;
        }


        return (
            <div>
                <form onSubmit={this.func}>
                    <p style={{height: "1em"}}>{this.state.msg}</p>
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
        var m = "";
        event.preventDefault();
        console.log(this.state.email, this.state.pass);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(e) {
            m = e.message;
        });
        this.setState({"msg": m});
    }
}