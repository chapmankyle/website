import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

import "./index.css";

// Create root to render into
const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)

// Render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
