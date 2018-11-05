import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import withValidation from './HOC/userForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

class LoginForm extends Component {

    submitHandler = (event) => {
        event.preventDefault();
        const { email, password } = this.props;
        const authUser = {email,password};
        
        if (this.isValid()) {
            this.props.login(authUser);
        }
    }

    isValid() {
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
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={9}>
                        <Input invalid={password} onBlur={this.props.blurPassword} type="password" name="password" id="password" />
                    </Col>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Label>{this.props.loginFaild}</Label>
            </Form>
        );
    }
}

function mapStateToProps(state){
    return {
        loginFaild: state.auth.loginFaild,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withValidation(LoginForm));