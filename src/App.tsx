import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { User, initializeApp } from 'firebase';

interface State {user: User | null;}
interface Props {}

export default class App extends Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    initializeApp(this.config);
  }

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

  setUser = (u: User) => {
    this.setState({user: u});
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login">
                <SignUp user={this.state.user} setUser={this.setUser} />
              </Route>

            <Route path="/">
              <Home user={this.state.user} setUser={this.setUser} />
            </Route>

          </Switch>
        </Router>
    );
  }
}