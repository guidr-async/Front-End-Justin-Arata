import React, {Component} from 'react';

import styled from 'styled-components'
import axios from "axios";


// Styled Components
const TripCard = styled.div`
  border: 1px solid black;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 300px;
  margin: 15px;
  background: #cc9759;
`;
const Button = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px;
  margin: 15px;
  color: #fbefda;
  background: #4d0111;
  &:hover {
  background: #70655e;
  }
`;
const TripText = styled.p`
  font-weight: bold;
  color: #fbefda;
 `;
const EditForm = styled.form`
  border: 1px solid black;
  margin: 15px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
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
                        <TripText>{this.props.title}</TripText>
                    </div>
                    <div>
                        <TripText>Location: {this.props.location}</TripText>
                        <TripText>Adventure Type: {this.props.adventure_type}</TripText>
                        <TripText>Duration: {this.props.duration}</TripText>
                        <TripText>Work or Pleasure? {this.props.professional ? 'Work' : 'Pleasure'}</TripText>
                    </div>
                    <div>
                        {/*need to make this username string*/}
                        <TripText>{this.props.user_id}</TripText>
                        <TripText>Trip Date: {this.props.date}</TripText>
                    </div>
                    <div>
                        <EditForm onSubmit={(e) => this.updateTrip(e, this.props.id)}>
                            <TripText>Title</TripText>
                            <input
                                value={this.state.title}
                                name="title"
                                type="text"
                                placeholder="Trip title"
                                onChange={this.handleChange}
                            />
                            <TripText>Location</TripText>
                            <input
                                value={this.state.location}
                                name="location"
                                type="text"
                                placeholder="Trip location"
                                onChange={this.handleChange}
                            />
                            <TripText>Adventure Type</TripText>
                            <input
                                value={this.state.adventure_type}
                                name="adventure_type"
                                type="text"
                                onChange={this.handleChange}
                            />
                            <TripText>Duration</TripText>
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
                            <TripText>Description</TripText>
                            <input
                                value={this.state.date}
                                onChange={this.handleChange}
                                name="date"
                                type="text"
                                placeholder="Enter date here"
                            />
                            <TripText>Date</TripText>
                            <Button onClick={this.updateTrip}>Edit Trip</Button>
                            <Button onClick={(e) => this.props.deleteTrip(e, this.props.id)}>Delete Trip</Button>
                        </EditForm>
                    </div>

                </TripCard>
            </div>
        );
    }
}

export default Trip;

