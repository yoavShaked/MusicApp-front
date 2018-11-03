import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default class SignUpForm extends Component {

    state = {
        email: '',
        name: '',
        password: '',
        inValid: {
            email: false,
            name: false,
            password: false
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let { email, name, password } = this.state;
        console.log(event);
        const user = {
            email,
            name,
            password
        };

        if (this.isValid()) {
            //send new user to server 
        }
    }

    isValid() {
        const { email, name, password } = this.state.inValid
        return email === false && name === false && password === false;
    }

    blurEmail = (event) => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { inValid } = this.state;
        if (emailRex.test(event.target.value)) {
            inValid.email = false;
        }
        else {
            inValid.email = true;
        }
        this.setState({ inValid });
        this.setState({ email: event.target.value });
    }

    blurName = (event) => {
        const { inValid } = this.state;
        if (event.target.value.length < 2 || event.target.value.length > 30) {
            inValid.name = true;
        }
        else {
            inValid.name = false;
        }
        this.setState({ inValid });
        this.setState({ name: event.target.value });
    }

    blurPassword = (event) => {
        const { inValid } = this.state;
        if (event.target.value.length < 7 || event.target.value.length > 20) {
            inValid.password = true;
        }
        else {
            inValid.password = false;
        }
        this.setState({ inValid });
        this.setState({ password: event.target.value });
    }

    render() {
        const { email, name, password } = this.state.inValid;

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
                    <Label sm={2}>Name</Label>
                    <Col sm={9}>
                        <Input invalid={name} onBlur={this.blurName} type="text" name="username" id="user" />
                        <FormFeedback invalid={name}>
                            Name should contains 2-30 letters.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={9}>
                        <Input invalid={password} onBlur={this.blurPassword} type="password" name="password" id="password" />
                        <FormFeedback invalid={password}>
                            Password should contains 7-20 cheracters.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}