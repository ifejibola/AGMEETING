import React, { useEffect } from "react";
// import { ThemeProvider } from '@mui/material/styles';

//Routes
import Routes from "./routes";
// import routes from './routes'
import { useRoutes } from "react-router";
import { connect } from "react-redux";

//Material UI
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createCustomTheme } from "../config/theme";

import RTL from "./RTL";
import SettingsDrawer from "./SettingsDrawer";
import { THEMES } from "../config/theme/constants";
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";
import { io } from "socket.io-client";
import jwtDecode from "jwt-decode";
import { setCurrentUser } from "./actions";

function App(props) {
  useEffect(() => {
    var socket = io();
  });
  const { settings } = useSettings();

  // const theme = createCustomTheme({
  //     theme: THEMES.LIGHT
  // });

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  const content = useRoutes(Routes);

  useEffect(() => {
    console.log("app.js");
    if (localStorage.getItem("access_token")) {
      let access_token = localStorage.getItem("access_token");
      const userInfo = jwtDecode(access_token).user;
      props.setCurrentUser(userInfo);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
