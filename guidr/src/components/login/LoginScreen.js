import React, {Component} from 'react';
import Login from './Login'
import SignUp from './SignUp'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginScreen: [],
            loginMessage: '',
            isLogin: true
        }
    }

    componentWillMount() {
        let loginScreen = [];
        loginScreen.push(<Login parentContext={this} appContext={this.props.parentContext} />)
        let loginMessage = "Not registered, sign up now!";
        this.setState({
            loginScreen: loginScreen,
            loginMessage: loginMessage
        })
    }
    render() {
        return (
            <div>
                {this.state.loginScreen}
                <div>
                    {this.state.loginMessage}
                    <div>
                        <button onClick={(event) => this.handleClick(event)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;