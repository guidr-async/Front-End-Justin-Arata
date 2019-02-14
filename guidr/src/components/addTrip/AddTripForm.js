import React from 'react'
import styled from 'styled-components'

// Styled Components
const AddForm = styled.div`
  border: 1px solid black;
  width: 500px;
  margin: 15px auto;
`;
const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 350px;
  margin: auto;
`;
const SubmitButton = styled.button`
  width: 150px;
  margin: 15px auto;
`
const TripInput = styled.input`
   border: 1px solid black;
   border-radius: 10px;
   padding: 5px;
`

const AddTripForm = props => {
    return (
        <AddForm>
            <h3>Add Trip Form</h3>
            <Form onSubmit={props.addTrip}>
                <p>Title</p>
                <TripInput
                    value={props.newTrip.title}
                    name="title"
                    type="text"
                    placeholder="Trip title"
                    onChange={props.handleChange}
                />
                <p>Location</p>
                <TripInput
                    value={props.newTrip.location}
                    name="location"
                    type="text"
                    placeholder="Trip location"
                    onChange={props.handleChange}
                />
                <p>Adventure Type</p>
                <TripInput
                    value={props.newTrip.adventure_type}
                    name="adventure_type"
                    type="text"
                    onChange={props.handleChange}
                />
                <p>Duration</p>
                <TripInput
                    value={props.newTrip.duration}
                    onChange={props.handleChange}
                    name="duration"
                    type="text"
                    placeholder="Trip length"
                />
                <p>Description</p>
                <TripInput
                    value={props.newTrip.description}
                    onChange={props.handleChange}
                    name="description"
                    type="text"
                    placeholder="Enter description here"
                />
                <p>Date</p>
                <TripInput
                    value={props.newTrip.date}
                    onChange={props.handleChange}
                    name="date"
                    type="text"
                    placeholder="Enter date here"
                />
                <SubmitButton onClick={props.addTrip}>Submit</SubmitButton>
            </Form>
        </AddForm>
    )
}
export default AddTripForm;