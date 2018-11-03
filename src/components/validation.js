
export default class Validator {
    validateEmail(email){
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRex.test(email);
    }
    
    validatePassword(password){
        return password.length >= 7 && password.length <= 20;
    }

    validateName(name){
        const nameRex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        return nameRex.test(name) && name.length >=2 && name.length <= 50;
    }
}