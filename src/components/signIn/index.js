import React, { Component } from 'react';
import './styles.css'

class SignIn extends Component {
    handleSubmit = e => e.preventDefault();

    render() {
        return (
            <form
                className="sign-in"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    className="sign-in__login"
                    placeholder="login"
                    value=''
                />
                <input
                    type="password"
                    className="sign-in__password"
                    placeholder="password"
                    value=''
                />
                <input
                    type="submit"
                    className="sing-in__submit"
                    value="Sign In"
                />
            </form>
        );
    }
}

export default SignIn;