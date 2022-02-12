import { fetch_location, set_loading } from "../reducers/map";

export const fetchLocation = (payload) => {
    return {
        type: fetch_location,
        payload: payload,
    };
};

export const setLoading = (payload) => {
    return {
        type: set_loading,
        payload: payload,
    };
};
