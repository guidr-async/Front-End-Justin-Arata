import React, {Component} from 'react';
import axios from 'axios'
import Login from './Login'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            id: '',
            username: '',
            name: '',
            email: '',
            location: '',
            bio: '',
            professional: false
        }
    }
    handleClick(event){
        if(this.state.username.length > 0 && this.state.password > 0 && this.state.name > 0 && this.state.email > 0 && this.state.location > 0 && this.state.professional > false){
            let payload = {
                "username": this.state.username,
                "password": this.state.password,
                "name": this.state.name,
                "email": this.state.email,
                "location": this.state.location,
                "professional": this.state.professional
            }
            axios
                .post('https://guidr2.herokuapp.com/user', payload)
                .then(response => {
                    console.log(response)
                    if(response.status === 200){
                        let loginScreen = [];
                        loginScreen.push(<Login parentContext={this} appContext={this.props.appContext} />)
                        let loginMessage = 'Not registered';
                        this.props.parentContext.setState({
                            loginScreen: loginScreen,
                            loginMessage: loginMessage,
                            buttonLabel: 'Register',
                            isLogin: true
                        })

                    }
                        })

        }
        axios
            .post('https://guidr2.herokuapp.com/user')

    }

    render() {

        return (
            <div>
                <h3>Register</h3>
                <input
                    type="text"
                    placeholder="Enter a username"
                    onChange={(event, newValue) =>
                    this.setState({ username: newValue })}
                />
                <input
                    type="password"
                    placeholder="Enter a password"
                    onChange={(event, newValue) =>
                    this.setState({ password: newValue })}
                />
                <input
                    type="text"
                    placeholder="First and Last name"
                    onChange={(event, newValue) =>
                    this.setState({ name: newValue})}
                />
                <input
                    type="text"
                    placeholder="Enter email here"
                    onChange={(event, newValue) =>
                    this.setState({ email: newValue })}
                />
                <input
                    type="text"
                    placeholder="Enter Location here"
                    onChange={(event, newValue) =>
                    this.setState({ location: newValue })}
                />
                <input
                    type="text"
                    placeholder="Enter bio here"
                    onChange={(event, newValue) =>
                    this.setState({ bio: newValue })}
                />
                {/*<input*/}
                    {/*type="radio"*/}
                    {/*value={}*/}
                    {/*onChange={}*/}
                {/*/>*/}
                <button onClick={(event) => this.handleClick(event)}>Submit</button>
            </div>
        );
    }
}

export default SignUp;