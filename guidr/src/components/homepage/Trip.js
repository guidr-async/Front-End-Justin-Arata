import React from 'react';

import styled from 'styled-components'

const TripCard = styled.div`
  border: 1px solid black;
  width: 300px;
`


const Trip = props => {
    // console.log(props)
    return (
        <TripCard>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <p>Location: {props.location}</p>
                <p>Adventure Type: {props.adventure_type}</p>
                <p>Duration: {props.duration}</p>
                <p>Work or Pleasure? {props.professional ? 'Work' : 'Pleasure'}</p>
            </div>
            <div>
                {/*need to make this username string*/}
                <p>{props.user_id}</p>
                <p>Trip Date: {props.date}</p>
            </div>
        </TripCard>
    )
}
export default Trip;