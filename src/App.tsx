import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {

  state = {
    user: null
  }

  setUser = (u: any) => {
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