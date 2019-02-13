// nav bar
    // add a trip link
    // profile link
        // info editable
        // user adventures displayed in trip card area
    // home page
    // logout link

    // trip type filter link
        // all, hiking, backpacking, rock climbing, cycling, scuba diving

// list of trip cards displayed out

import React, {Component} from 'react';
import TripList from "./TripList";
import axios from "axios";
import AddTripForm from "../addTrip/AddTripForm";
import TypeList from './TypeList'

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
        event.preventDefault()
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
                {/*<TypeList types={this.state.types} selectedType={this.state.selected} changeSelected={this.changeSelected} />*/}
                <TripList handleChange={this.handleChange} deleteTrip={this.deleteTrip} trips={this.filterTypes()} newTrip={this.state.newTrip} />
                <AddTripForm addTrip={this.addTrip} handleChange={this.handleChange} newTrip={this.state.newTrip} />
            </div>
        );
    }
}

export default HomePage;