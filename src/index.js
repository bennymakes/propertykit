import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import store from "../src/js/store/index";
import { addArticle } from "../src/js/actions/index";
import Seduxe from "./js/storage";

window.addArticle = addArticle;

window.seduxe = new Seduxe(store, "S", true);

window.store = store;

const unsubscribe = (store) => {
  store.subscribe(() => console.log(store.getState()));
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

unsubscribe(store);
