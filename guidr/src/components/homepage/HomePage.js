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
            selected: 'all'
        }
    }

    componentDidMount() {
        axios
            .get('https://guidr2.herokuapp.com/adventures')
            .then(response => {
                console.log(response.data)
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
                <TypeList types={this.state.types} selectedType={this.state.selected} selectTypeHandler={this.changeSelected} />
                <TripList trips={this.filterTypes()} />
                <AddTripForm />
            </div>
        );
    }
}

export default HomePage;