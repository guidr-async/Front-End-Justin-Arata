import React from 'react'
import styled from 'styled-components'

const AddTripForm = props => {
    return (
        <div>
            <h1>Trip Form</h1>
            <form>
                <p>Title</p>
                <input
                    type="text"
                    placeholder="Trip title"
                />
                <p>Location</p>
                <input
                    type="text"
                    placeholder="Trip location"
                />
                <p>Adventure Type</p>
                <input
                    type="radio"
                    value="Backpacking"
                />
                Backpacking
                <input
                    type="radio"
                    value="Hiking"
                />
                Hiking
                <input
                    type="radio"
                    value="Cycling"
                />
                Cycling
                <input
                    type="radio"
                    value="Rock Climbing"
                />
                Rock Climbing
                <input
                    type="radio"
                    value="Scuba Diving"
                />
                Scuba Diving
                <p>Duration</p>
                <input
                    type="text"
                    placeholder="Trip length"
                />
                <p>Work or Pleasure?</p>
                <input
                    type="radio"
                    value="Work"
                />
                Work
                <input
                    type="radio"
                    value="Pleasure"
                />
                Pleasure
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddTripForm;