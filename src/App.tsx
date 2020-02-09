import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Settings from './Components/Settings';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { User, initializeApp } from 'firebase';

interface State {}
interface Props {}

export default class App extends Component<Props, State> {

  constructor(props) {
    super(props);
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
            <Route path="/signup">
                <SignUp />
              </Route>

              <Route path="/login">
                <LogIn />
              </Route>

            <Route path="/settings">
              <Settings />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
    );
  }
}