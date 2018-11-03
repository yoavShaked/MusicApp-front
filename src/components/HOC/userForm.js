import React from 'react';

export default childComponent => {
    return class UserForm extends React.Component{

        state = {
            email: '',
            password: '',
            inValid: {
                email: false,
                password: false
            }
        }

        

        render(){

        }
    }
};