import { combineReducers } from "redux";
import { postsReducer } from "../reducers/postsReducer";
import { appReducer } from "../reducers/appReducer";
import { profileReducer } from "../reducers/profileReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    profile: profileReducer,
});
