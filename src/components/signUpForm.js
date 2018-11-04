import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Validator from '../service/validation';
import withValidation from './HOC/userForm';
const validator = new Validator();


class SignUpForm extends Component {

    state = {
        name: '',
        inValid: {
            name: false,
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { email, password } = this.props;
        const {name} = this.state;
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
        const { email, password } = this.props.inValid;
        const {name} = this.state.inValid;
        return email === false && name === false && password === false;
    }

    blurName = (event) => {
        const { inValid } = this.state;
        inValid.name = !validator.validateName(event.target.value);
        this.setState({ inValid });
        this.setState({ name: event.target.value });
    }

    render() {
        const { email, password } = this.props.inValid;
        const {name} = this.state.inValid;
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup row>
                    <Label sm={2}>Email</Label>
                    <Col sm={9}>
                        <Input invalid={email} onBlur={this.props.blurEmail} type="email" name="email" id="email" placeholder="youremail@.com" />
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
                            Name should contains 2-50 letters.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={9}>
                        <Input invalid={password} onBlur={this.props.blurPassword} type="password" name="password" id="password" />
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

export default withValidation(SignUpForm);