import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./store";
import "./index.css";

ReactDOM.render(
  <>
    <StoreProvider>
      <ToastProvider
        placement="bottom-right"
        autoDismissTimeout={3000}
        autoDismiss
      >
        <App />
      </ToastProvider>
    </StoreProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
