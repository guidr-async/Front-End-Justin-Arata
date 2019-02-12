import React from 'react';

const Profile = props => {
    return (
        <div>
            <div>
                <p>Name: {props.name}</p>
                <p>eMail: {props.email}</p>
                <p>Location: {props.location}</p>
                <p>Bio: {props.bio}</p>
            </div>
        </div>
    )
}
export default Profile;