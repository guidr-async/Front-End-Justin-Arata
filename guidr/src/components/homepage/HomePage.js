import React, {Component} from 'react';
import TripList from "./TripList";
import axios from "axios";
import AddTripForm from "../addTrip/AddTripForm";
import {Link, Route} from 'react-router-dom'
import styled from 'styled-components'

// Styled Components
const NavBar = styled.div`
  border: 1px solid black;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
  text-decoration: none;
`

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            types: [
                'all',
                'Cycling',
                'Hiking',
                'Rock Climbing',
                'Scuba Diving',
                'Back Packing'
            ],
            selected: 'all',
            newTrip: {
                user_id: 1,
                adventure_type: '',
                title: '',
                location: '',
                duration: '',
                description: '',
                professional: false,
                date: ''
            }
        }
    }

    deleteTrip = (event, id) => {
        event.preventDefault();
        // console.log(id)
        axios
            .delete(`https://guidr2.herokuapp.com/adventures/${id}`)
            .then(response => {
                console.log(response, 'delete')
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = event => {
        let newTrip = {
            ...this.state.newTrip,
            [event.target.name]: event.target.value
        };
        this.setState({
            newTrip
        })
    };
    addTrip = event => {
        event.preventDefault();
        axios
            .post('https://guidr2.herokuapp.com/adventures', this.state.newTrip)
            .then(response => {
                // console.log(response)
                this.setState({
                    trips: [...this.state.trips, response.data]
                })
            })
    };
    componentDidMount() {
        axios
            .get('https://guidr2.herokuapp.com/adventures')
            .then(response => {
                // console.log(response)
                this.setState({
                    trips: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    changeSelected = type => {
        this.setState({ selected: type })
    };

    filterTypes = () => {
        if (this.state.selected === 'all') {
            return this.state.trips;
        } else {
            return this.state.trips.filter(trip => trip.type === this.state.selected)
        }
    };

    render() {
        return (
            <div>
                <NavBar>
                    <Link to='/Trips'>Trips</Link>
                    <br />
                    <Link to='/AddTrip'>Add Trip</Link>
                </NavBar>
                {/*<TypeList types={this.state.types} selectedType={this.state.selected} changeSelected={this.changeSelected} />*/}
                <Route exact path='/Trips'
                       render={props => (
                           <TripList
                               {...props}
                               handleChange={this.handleChange}
                               deleteTrip={this.deleteTrip}
                               trips={this.filterTypes()}
                               newTrip={this.state.newTrip}
                           />
                       )}
                />
                {/*<TripList handleChange={this.handleChange} deleteTrip={this.deleteTrip} trips={this.filterTypes()} newTrip={this.state.newTrip} />*/}
                {/*<Link to={'/addTrip'} component={AddTripForm}>*/}
                    {/*<AddTripForm addTrip={this.addTrip} handleChange={this.handleChange} newTrip={this.state.newTrip} />*/}
                {/*</Link>*/}
                <Route path='/AddTrip' render={props => (
                    <AddTripForm {...props} newTrip={this.state.newTrip} handleChange={this.handleChange} newTrip={this.state.newTrip} addTrip={this.addTrip} />
                    )}
                />
            </div>
        );
    }
}

export default HomePage;