const initialState = {
    email: '',
    password: '',
    signUpForm: false,
    username: ''
};

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'SIGN_UP_FORM':
            console.log('hi');
            return {
                ...state,
                signUpForm: true
            }
        case 'CLOSE_SIGN_UP_FORM':
            
            return {
                ...state,
                signUpForm: false
            }
        case 'GET_EMAIL':

            return {
                ...state,
                email: action.payload
            }
        case 'GET_PASSWORD':

            return {
                ...state,
                password: action.payload
            };
        case 'GET_USERNAME':

            return {
                ...state,
                username: action.payload
        };
        case 'SIGN_UP_OK':

            return {
                ...state,
                email: '',
                password: '',
                username: '',
                signUpForm: false
            }
        case 'GET_REPEAT_PASSWORD':

            return {
                ...state,
                repeatPassword: action.payload
            }
        default:
            return state;
    }
}

export default reducer;