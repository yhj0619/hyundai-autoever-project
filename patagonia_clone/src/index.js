import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store"; // 스토어 생성 파일 경로
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
