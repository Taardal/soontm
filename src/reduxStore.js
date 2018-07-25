import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {};
const enhancers = [];

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
