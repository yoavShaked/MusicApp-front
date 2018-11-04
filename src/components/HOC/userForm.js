import React from 'react';
import Validator from '../../service/validation';
const validator = new Validator();

export default WrappedComponent => {
    class UserForm extends React.Component{

        state = {
            email: '',
            password: '',
            inValid: {
                email: false,
                password: false
            }
        };

    
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

        render(){
            return <WrappedComponent 
            {...this.props} 
            blurPassword={this.blurPassword}
            blurEmail={this.blurEmail}
            email={this.state.email}
            password={this.state.password}
            inValid={this.state.inValid}/>
        }
    }

    return UserForm;
};