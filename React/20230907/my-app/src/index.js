import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ListRender from "./ListRender";
import FragmentRender from "./FragmentRender";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ListRender />
    <FragmentRender />
  </React.StrictMode>
);
