import React, { Component } from 'react';
import './App.css';
import LoginScreen from './components/login/LoginScreen'
import HomePage from "./components/homepage/HomePage";


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
        <HomePage />
      </div>
    );
  }
}

export default App;
