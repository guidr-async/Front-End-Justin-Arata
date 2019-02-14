import React from 'react'
import styled from 'styled-components'

const AddTripForm = props => {
    return (
        <div>
            <h1>Trip Form</h1>
            <form onSubmit={props.addTrip}>
                <p>Title</p>
                <input
                    value={props.newTrip.title}
                    name="title"
                    type="text"
                    placeholder="Trip title"
                    onChange={props.handleChange}
                />
                <p>Location</p>
                <input
                    value={props.newTrip.location}
                    name="location"
                    type="text"
                    placeholder="Trip location"
                    onChange={props.handleChange}
                />
                <p>Adventure Type</p>
                <input
                    value={props.newTrip.adventure_type}
                    name="adventure_type"
                    type="text"
                    onChange={props.handleChange}
                />
                <p>Duration</p>
                <input
                    value={props.newTrip.duration}
                    onChange={props.handleChange}
                    name="duration"
                    type="text"
                    placeholder="Trip length"
                />
                {/*<p>Work or Pleasure?</p>*/}
                {/*<input*/}
                    {/*value={props.newTrip.professional}*/}
                    {/*onChange={props.handleChange}*/}
                    {/*name="professional"*/}
                    {/*type="radio"*/}
                {/*/>*/}
                {/*Work*/}
                {/*<input*/}
                    {/*value={props.newTrip.professional}*/}
                    {/*onChange={props.handleChange}*/}
                    {/*name="professional"*/}
                    {/*type="radio"*/}
                {/*/>*/}
                {/*Pleasure*/}
                <input
                    value={props.newTrip.description}
                    onChange={props.handleChange}
                    name="description"
                    type="text"
                    placeholder="Enter description here"
                />
                Description
                <input
                    value={props.newTrip.date}
                    onChange={props.handleChange}
                    name="date"
                    type="text"
                    placeholder="Enter date here"
                />
                Date
                {/*<button onClick={props.addTrip}>Submit</button>*/}
            </form>
        </div>
    )
}
export default AddTripForm;