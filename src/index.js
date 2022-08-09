import React from "react";
import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

/* const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
} */

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
  document.getElementById("root")
);
