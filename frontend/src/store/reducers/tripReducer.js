const initialState = {
    trips: [],
    loading: true
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRIPS':
            return {
                ...state,
                trips: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

module.exports = tripReducer;