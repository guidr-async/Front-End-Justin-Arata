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

class HomePage extends Component {
    constructor(props) {
        super(props);

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
            <div>
                <TripList />
            </div>
        );
    }
}

export default HomePage;