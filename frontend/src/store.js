import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "./reducer";

import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const getMiddleware = () => {
  return applyMiddleware(routerMiddleware(history), createLogger());
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
