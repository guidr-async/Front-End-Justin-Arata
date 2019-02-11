import React from 'react'
import Trip from './Trip'

const TripList = props => {
    return (
        <div>
            {props.trips.map(trip => {
                console.log(trip);
                return <Trip key={trip.id} trip={trip} />
            })}
        </div>
    )
}
export default TripList;