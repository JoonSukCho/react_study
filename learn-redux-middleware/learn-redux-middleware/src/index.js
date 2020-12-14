import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import myLogger from "./middlewares/MyLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

// 여러개의 미들웨어 적용 가능
// logger를 사용할 경우, logger가 applyMiddleware의 인자 마지막에 있어야한다.
// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(ReduxThunk, logger))
  composeWithDevTools(
    applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }))
  )
);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
