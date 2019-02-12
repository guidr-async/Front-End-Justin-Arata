import React, {Component} from 'react';
import Profile from "./Profile";
import ProfileTrips from "./ProfileTrips";

class ProfileContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    compo
    render() {
        return (
            <div>
                <Profile/>
                <ProfileTrips/>
            </div>
        );
    }
}

export default ProfileContainer;