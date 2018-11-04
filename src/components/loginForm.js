import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import withValidation from './HOC/userForm';

class LoginForm extends Component {

    submitHandler = (event) => {
        event.preventDefault();
        const {email, password} = this.props.inValid;
        const authUser = {
            email,
            password
        };
        if(this.isValid()){
            // send auth user to the server.
        }
    }

    isValid(){
        return this.props.inValid.email === false && this.props.inValid.password === false;
    }

    render() {
        const { email, password } = this.props.inValid;
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
                    <Label sm={2}>Password</Label>
                    <Col sm={9}>
                        <Input invalid={password} onBlur={this.props.blurPassword} type="password" name="password" id="password" />
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

export default withValidation(LoginForm);