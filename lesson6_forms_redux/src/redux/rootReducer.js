import { combineReducers } from "redux";
import { AppReducer } from "./appReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    app: AppReducer,
})