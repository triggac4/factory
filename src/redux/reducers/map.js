const initialState = {
    origin: [],
    destination: [],
    current: [],
    loading: false,
    error: false,
};

export const fetch_location = "FETCH_LOCATION";
export const set_loading = "SET_LOADING";
export const set_error = "SET_ERROR";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetch_location:
            return {
                ...state,
                origin: action.payload.origin,
                destination: action.payload.destination,
                current: action.payload.current,
                error: action.payload.error,
            };
        case set_loading:
            return {
                ...state,
                loading: action.payload,
            };
        case set_error:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
