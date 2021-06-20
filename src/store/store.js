import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

// console.log(rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer(),
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
