import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    <h3>Login</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(event, newValue) =>
                        this.setState({ username: newValue })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(event, newValue) =>
                        this.setState({ password: newValue })}
                    />
                </form>
                <button onClick={(event) => this.handleClick(event)}>Login</button>
            </div>
        );
    }
}

export default Login;