import React, {Component} from 'react';
import {Col,Button,Form,FormGroup,Label,Input,FormFeedback,Fade} from 'reactstrap';
import Validator from '../service/validation';
import withValidation from './HOC/userForm';
import {signUp} from './../actions/index';
const validator = new Validator();

class SignUpForm extends Component {

    state = {
        name: '',
        inValid: {
            name: false
        },
        fadeIn: false,
        signInUser: {
            name: '',
            email: '',
            token: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {email, password} = this.props;
        const {name} = this.state;
        const user = {
            email,
            name,
            password
        };

        if (this.isValid()) {
            signUp(user)
                .then(signInUser => this.setState({signInUser}))
                .catch((err) => {
                    this.setState({fadeIn: true});
                });
        }
    }

    isValid() {
        const {email, password} = this.props.inValid;
        const {name} = this.state.inValid;
        return email === false && name === false && password === false;
    }

    blurName = (event) => {
        const {inValid} = this.state;
        inValid.name = !validator.validateName(event.target.value);
        this.setState({inValid});
        this.setState({name: event.target.value});
    }

    render() {
        const {email, password} = this.props.inValid;
        const {name} = this.state.inValid;
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup row>
                    <Label sm={2}>Email</Label>
                    <Col sm={9}>
                        <Input invalid={email} onBlur={this.props.blurEmail} type="email" name="email" id="email" placeholder="youremail@.com"/>
                        <FormFeedback invalid={email}>
                            Uh oh! Looks like there is an issue with your email. Please input a correct
                            email.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Name</Label>
                    <Col sm={9}>
                        <Input invalid={name} onBlur={this.blurName} type="text" name="username" id="user"/>
                        <FormFeedback invalid={name}>
                            Name should contains 2-50 letters.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={9}>
                        <Input invalid={password} onBlur={this.props.blurPassword} type="password" name="password" id="password"/>
                        <FormFeedback invalid={password}>
                            Password should contains 7-20 cheracters.
                        </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={5}>
                        <Button type="submit">Submit</Button>
                    </Col>
                    <Col sm={5}>
                        <Fade in={this.state.fadeIn} tag="h6" className="mt-3">
                            User allready exsits.
                        </Fade>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default withValidation(SignUpForm);