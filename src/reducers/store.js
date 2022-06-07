import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./rootReducer";
import rootSaga from "./saga";


const saga=createSagaMiddleware()
const sagaMiddleWare=[saga]

const store=createStore(rootReducer,applyMiddleware(...sagaMiddleWare))
saga.run(rootSaga)
export default store