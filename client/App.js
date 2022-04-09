import React, { useEffect, useState } from "react";
// import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from "history";

//Routes
import Routes from "./routes";
// import routes from './routes'
import { useRoutes } from "react-router";

//Material UI
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createCustomTheme } from "../config/theme";

import RTL from "./RTL";
import SettingsDrawer from "./SettingsDrawer";
import { THEMES } from "../config/theme/constants";
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";

// Service
import {authenticationService} from "../server/services/authentication.service";
import {Navigate, useNavigate, useLocation} from "react-router-dom";

function App() {
  const { settings } = useSettings();
  const navigate = useNavigate();
  const location = useLocation();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  // Another approach is to pass userStates to each of the route as well as the token to make full use of state property
  const content = useRoutes(Routes);

  useEffect(async () => {
    // Check login authentication for every pages of the application (or every time the app rerender)
    // Alternative solution would be using onEnter for every Route in route.js
    const currentUser = await authenticationService.currentUserValue;

    console.log(currentUser);

    if (currentUser == null) {
      // not logged in so redirect to login page with the return url
      if(location.pathname === "/signup" || location.pathname ==="/index"){}
        
      else {
        navigate("/login");
      }
    }
  }, []);

  //This component basically contains the content for the entire application, wraps it in the theme provider.
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <RTL direction={settings.direction}>
          {/* <CssBaseline /> */}
          {/* <Toaster position="top-center" /> */}
          {/* <SettingsDrawer /> */}
          {content}
          {/* Declarative route */}
          {/* <Routes /> */}
        </RTL>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
