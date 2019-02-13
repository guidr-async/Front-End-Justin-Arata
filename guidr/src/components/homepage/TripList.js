import React from 'react'
import Trip from './Trip'
import styled from 'styled-components'

const TripCardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const TripList = props => {
    // console.log(props)
    return (
        <TripCardList>
            {props.trips.map(trip => {
                // console.log(trip);
                return <Trip
                    deleteTrip={props.deleteTrip}
                    id={trip.id}
                    key={trip.id}
                    title={trip.title}
                    location={trip.location}
                    adventure_type={trip.adventure_type}
                    duration={trip.duration}
                    professional={trip.professional}
                    user_id={trip.user_id}
                    date={trip.date}
                />
            })}
        </TripCardList>
    )
}
export default TripList;