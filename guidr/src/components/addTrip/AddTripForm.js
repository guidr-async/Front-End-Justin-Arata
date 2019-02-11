import React from 'react'

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
                <input
                    type="radio"
                    value="Hiking"
                />
                <input
                    type="radio"
                    value="Cycling"
                />
                <input
                    type="radio"
                    value="Rock Climbing"
                />
                <input
                    type="radio"
                    value="Scuba Diving"
                />
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
                <input
                    type="radio"
                    value="Pleasure"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddTripForm;