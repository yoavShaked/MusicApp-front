import React, { Component } from 'react';
import ModalRegister from './modalRegister';
import SignUpForm from './signUpForm';

export default class LandingPage extends Component {

    state = {
        showModalLogin: false,
        showModalSinUp: false
    };


    toggleLogin = () => {
        this.setState({ showModalLogin: !this.state.showModalLogin });
    }

    toggleSignUp = () => {
        this.setState({ showModalSinUp: !this.state.showModalSinUp });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a onClick={this.toggleLogin} className="navbar-brand" href="#">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a onClick={this.toggleSignUp} className="navbar-brand" href="#">Sign Up</a>
                        </li>
                    </ul>
                </nav>
                <ModalRegister toggle={this.toggleLogin} show={this.state.showModalLogin} title="Login">
                </ModalRegister>
                <ModalRegister toggle={this.toggleSignUp} show={this.state.showModalSinUp} title="Creat Account">
                    <SignUpForm />
                </ModalRegister>
            </div>
        );
    }
}