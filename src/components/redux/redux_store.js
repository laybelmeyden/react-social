import { createStore,combineReducers } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import friendReducer from "./friendReducer";


const reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messageReducer,
    friendsPage:friendReducer,
});
const store = createStore(reducers);

export default store;