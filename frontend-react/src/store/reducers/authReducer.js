const initialState = {
    user: null,
    address: [],
    clientSecret: null,
    selectedUserCheckoutAddress: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_USER':
            return { ...state, user: action.payload };

        case 'LOG_OUT_USER':
            return { user: null, address: null };

        case 'USER_ADDRESS':
            return { ...state, address: action.payload };
        case 'SELECT_CHECKOUT_ADDRESS':
            return { ...state, selectedUserCheckoutAddress: action.payload };
        case 'REMOVE_CHECKOUT_ADDRESS':
            return { ...state, selectedUserCheckoutAddress: null };
        case 'CLIENT_SECRET':
            return { ...state, clientSecret: action.payload };
        case 'REMOVE_CLIENT_SECRET_ADDRESS':
            return {
                ...state,
                clientSecret: null,
                selectedUserCheckoutAddress: null,
            };

        default:
            return state;
    }
};
