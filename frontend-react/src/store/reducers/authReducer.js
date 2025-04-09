const initialState = {
    user: null,
    address: [],
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

        default:
            return state;
    }
};
