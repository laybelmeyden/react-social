import { createStore,combineReducers, applyMiddleware } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import friendReducer from "./friendReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messageReducer,
    friendsPage:friendReducer,
    auth:authReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;