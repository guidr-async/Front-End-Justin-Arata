import React, { Component } from 'react';
import './App.css';
import LoginScreen from './components/login/LoginScreen'
import HomePage from "./components/homepage/HomePage";
import { Route } from 'react-router-dom'
import NavLink from "react-router-dom/es/NavLink";
import AddTripForm from "./components/addTrip/AddTripForm";


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
        <div>
          {/*<NavLink to='/' activeClassName='activeNavButton'>*/}
          {/*Home*/}
        {/*</NavLink>*/}
          {/*<NavLink to='/addTrip'>*/}
            {/*Add Trip*/}
          {/*</NavLink>*/}
        </div>
        {/*<Route exact path='/' component={HomePage} />*/}
        <HomePage />
      </div>
    );
  }
}

export default App;
