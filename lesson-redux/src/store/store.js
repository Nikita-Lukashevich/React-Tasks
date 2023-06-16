import postReducer from "./postReducer";
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
    post: postReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

