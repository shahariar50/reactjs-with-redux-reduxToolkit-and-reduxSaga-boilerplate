import { put, all, takeLatest } from "redux-saga/effects";
import { loadPosts, setPostsState } from "../reducers/posts";

function* LOADPOSTS() {
  yield put(setPostsState({ loading: true }));
}

export default function* rootSaga() {
  yield all([takeLatest(loadPosts, LOADPOSTS)]);
}
