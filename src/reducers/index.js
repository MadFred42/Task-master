const initialState = {
    signUpForm: false
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
        default:
            return state;
    }
}

export default reducer;