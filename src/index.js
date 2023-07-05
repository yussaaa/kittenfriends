import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

import "tachyons";
// import Hello from './Hello';
// import Card from './Card';
// import CardList from './CardList';
// import { kittens } from './robots';
import { Provider } from "react-redux"; //Provider here as a wrapper to pass the store to every object underneath
import { configureStore } from "@reduxjs/toolkit";
import { searchKitten } from "./reducers";

// const store = createStore(searchKitten); // In real cases, there will be multiple reducers
const store = configureStore({ reducer: searchKitten });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
