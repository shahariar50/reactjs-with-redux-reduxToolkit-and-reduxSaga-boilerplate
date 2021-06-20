import { combineReducers } from "redux";
import posts from "./reducers/posts";

const reducers = () =>
  combineReducers({
    posts,
    // anotherReducer
  });

export default reducers;
