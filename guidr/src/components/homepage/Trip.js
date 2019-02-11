import React from 'react';

import styled from 'styled-components'

const TripCard = styled.div`
  border: 1px solid black;
`


const Trip = props => {
    return (
        <TripCard>
            <div>
                <p>{props.trip.title}</p>
            </div>
            <div>
                <p>Location: {props.trip.location}</p>
                <p>Adventure Type: {props.trip.adventure_type}</p>
                <p>Duration: {props.trip.duration}</p>
                <p>Work or Pleasure? {props.trip.professional}</p>
            </div>
            <div>
                {/*need to make this username string*/}
                <p>{props.trip.user_id}</p>
                <p>Trip Date: {props.trip.date}</p>
            </div>
        </TripCard>
    )
}
export default Trip;