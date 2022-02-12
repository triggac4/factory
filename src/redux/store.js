import mapReducer from "./reducers/map";
import { createStore } from "redux";

const store = createStore(
    mapReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
