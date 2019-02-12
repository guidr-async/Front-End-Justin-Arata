import React, {Component} from 'react';
import Profile from "./Profile";
import ProfileTrips from "./ProfileTrips";
import axios
import AddTripForm from "../addTrip/AddTripForm";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios
            .get()
    }
    render() {
        return (
            <div>
                <Profile/>
                <ProfileTrips/>
            </div>
        );
    }
}

export default ProfilePage;