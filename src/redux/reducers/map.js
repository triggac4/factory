const initialState = {
    start: [],
    end: [],
    current: [],
    loading: false,
    error: null,
};

export const fetch_location = "FETCH_LOCATION";
export const set_loading = "SET_LOADING";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetch_location:
            return {
                ...state,
                start: action.payload.start,
                end: action.payload.end,
                current: action.payload.current,
                error: action.payload.error,
            };
        case set_loading:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
