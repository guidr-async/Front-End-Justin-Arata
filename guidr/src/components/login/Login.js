import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleLoginSubmit = event => {

    }
    render() {
        return (
            <div>
                <form>
                    <h3>Login</h3>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                </form>
                <button>Login</button>
            </div>
        );
    }
}

export default Login;