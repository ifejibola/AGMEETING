import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../public/theme/styles.css";

import { StrictMode } from "react";
import { SettingsProvider } from "./contexts/SettingsContext";
import { StyledEngineProvider } from "@mui/styled-engine";

//Contains app component wraps it in necessary context providers, and the router.
ReactDOM.render(
    <StyledEngineProvider injectFirst>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </StyledEngineProvider>
,
  document.getElementById("root")
);
