import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TripList from "./components/homepage/TripList";
import axios from 'axios'
import AddTripForm from "./components/addTrip/AddTripForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
    axios
        .get('https://guidr2.herokuapp.com/adventures')
        .then(response => {
          console.log(response)
          this.setState({
            trips: response.data
          })
        })
        .catch(error => {
          console.log(error)
        })
  }

  render() {
    return (
      <div className="App">
        <TripList trips={this.state.trips} />
        <AddTripForm />
      </div>
    );
  }
}

export default App;
