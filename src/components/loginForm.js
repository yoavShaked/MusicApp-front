import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Validator from './validation';

const validator = new Validator();

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        inValid: {
            email: false,
            password: false
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        const authUser = {
            email,
            password
        }
        if (this.isValid()) {
            //send authUser to server
        }
    }

    isValid() {
        return this.state.inValid.email === false && this.state.inValid.password === false;
    }

    blurEmail = (event) => {
        let { inValid } = this.state;
        inValid.email = !validator.validateEmail(event.target.value);
        this.setState({ inValid });
        this.setState({ email: event.target.value });
    }

    blurPassword = (event) => {
        let { inValid } = this.state;
        inValid.password = !validator.validatePassword(event.target.value);
        this.setState({ inValid });
        this.setState({ password: event.target.value });
    }

    render() {
        const { email, password } = this.state.inValid;
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup row>
                    <Label sm={2}>Email</Label>
                    <Col sm={9}>
                        <Input invalid={email} onBlur={this.blurEmail} type="email" name="email" id="email" placeholder="youremail@.com" />
                        <FormFeedback invalid={email}>
                            Uh oh! Looks like there is an issue with your email. Please input a correct
                                email.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={9}>
                        <Input invalid={password} onBlur={this.blurPassword} type="password" name="password" id="password" />
                    </Col>
                </FormGroup>
                <FormFeedback invalid={password || email}>
                    Wrong email or password.
                </FormFeedback>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}