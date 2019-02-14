import React, { Component } from 'react';
import './App.css';
import LoginScreen from './components/login/LoginScreen'
import HomePage from "./components/homepage/HomePage";
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],

    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={HomePage} />
      </div>
    );
  }
}

export default App;
