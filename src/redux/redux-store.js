import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reucer";
import dialogReducer from "./dialog-reducer";
import sitebarReducer from "./sitebar-reduser";

let redusers = combineReducers({
    profileReducer,
    dialogReducer,
    sitebarReducer
});

let store = createStore(redusers);

export default store;