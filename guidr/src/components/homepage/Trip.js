import React, {Component} from 'react';

import styled from 'styled-components'
import axios from "axios";

const TripCard = styled.div`
  border: 1px solid black;
  width: 300px;
`;

class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
                user_id: this.props.user_id,
                adventure_type: this.props.adventure_type,
                title: this.props.title,
                location: this.props.location,
                duration: this.props.duration,
                description: this.props.description,
                professional: false,
                date: this.props.date
            }
        }
    updateTrip = () => {
        axios
            .put(`https://guidr2.herokuapp.com/adventures/${this.props.id}`, this.state)
            .then(response => {
                console.log(response);
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
        }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div>
                <TripCard>
                    <div>
                        <p>{this.props.title}</p>
                    </div>
                    <div>
                        <p>Location: {this.props.location}</p>
                        <p>Adventure Type: {this.props.adventure_type}</p>
                        <p>Duration: {this.props.duration}</p>
                        <p>Work or Pleasure? {this.props.professional ? 'Work' : 'Pleasure'}</p>
                    </div>
                    <div>
                        {/*need to make this username string*/}
                        <p>{this.props.user_id}</p>
                        <p>Trip Date: {this.props.date}</p>
                    </div>
                    <button onClick={(e) => this.props.deleteTrip(e, this.props.id)}>X</button>
                    <form onSubmit={(e) => this.updateTrip(e, this.props.id)}>
                        <p>Title</p>
                        <input
                            value={this.state.title}
                            name="title"
                            type="text"
                            placeholder="Trip title"
                            onChange={this.handleChange}
                        />
                        <p>Location</p>
                        <input
                            value={this.state.location}
                            name="location"
                            type="text"
                            placeholder="Trip location"
                            onChange={this.handleChange}
                        />
                        <p>Adventure Type</p>
                        <input
                            value={this.state.adventure_type}
                            name="adventure_type"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <p>Duration</p>
                        <input
                            value={this.state.duration}
                            onChange={this.handleChange}
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
                            value={this.state.description}
                            onChange={this.handleChange}
                            name="description"
                            type="text"
                            placeholder="Enter description here"
                        />
                        Description
                        <input
                            value={this.state.date}
                            onChange={this.handleChange}
                            name="date"
                            type="text"
                            placeholder="Enter date here"
                        />
                        Date
                        {/*<button onClick={props.addTrip}>Submit</button>*/}
                        <div onClick={this.updateTrip}>update trip</div>
                    </form>
                </TripCard>
            </div>
        );
    }
}

export default Trip;

