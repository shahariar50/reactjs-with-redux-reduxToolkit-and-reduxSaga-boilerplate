import { all } from "@redux-saga/core/effects";
import postsSaga from "./sagas/postsSaga";

export default function* rootSaga() {
  yield all([
    postsSaga(),
    // anotherSaga()
  ]);
}
