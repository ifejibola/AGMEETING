import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../public/theme/styles.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import { StrictMode } from "react";
import { SettingsProvider } from "./contexts/SettingsContext";
import { StyledEngineProvider } from "@mui/styled-engine";

//Contains app component wraps it in necessary context providers, and the router.
ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
