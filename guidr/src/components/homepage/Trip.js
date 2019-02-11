import React from 'react';
const Trip = props => {
    return (
        <div>
            <div>
                {props.title}
            </div>
            <div>
                {props.location}
                {props.adventure_type}
                {props.duration}
                {props.professional}
            </div>
            <div>
                {props.user_id}
                {props.date}
            </div>
        </div>
    )
}
export default Trip;