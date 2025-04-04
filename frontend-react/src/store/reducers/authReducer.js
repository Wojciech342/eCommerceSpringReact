const initialState = {
    user: null,
    address: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_USER':
            return { ...state, user: action.payload };

        case 'LOG_OUT_USER':
            return { user: null, address: null };

        default:
            return state;
    }
};
