const closeSignUpForm = () => {

    return {
        type: 'CLOSE_SIGN_UP_FORM'
    }
}

const getEmail = (email) => {

    return {
        type: 'GET_EMAIL',
        payload: email
    }
}

const getPassword = (password) => {
   
    return {
        type: 'GET_PASSWORD',
        payload: password
    } 
}

const getUsername = (username) => {

    return {
        type: 'GET_USERNAME',
        payload: username
    }
}

const signUpForm = () => {

    return {
        type: 'SIGN_UP_FORM'
    }
};

export {
    closeSignUpForm,
    getEmail,
    getPassword,
    getUsername,
    signUpForm,
}