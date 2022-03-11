import React, {useEffect} from "react";
import routes from "./routes";

import {createCustomTheme} from '../config/theme';
import RTL from './RTL'
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";
import {useRoutes} from "react-router";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import SettingsDrawer from "./SettingsDrawer";
import {ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';
import {Toaster} from "react-hot-toast";


export default function App() {

    const {settings} = useSettings();

    const theme = createCustomTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        roundedCorners: settings.roundedCorners,
        theme: settings.theme
    });

    const content = useRoutes(routes);

    useEffect(() => {
    })

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <ToastContainer/>
                <CssBaseline/>
                <RTL direction={settings.direction}>
                    {/* <Toaster position="top-center" /> */}
                    <SettingsDrawer/>
                    {content}
                    {/* Declarative route */}
                    {/* <Routes /> */}
                </RTL>
            </ThemeProvider>
        </ErrorBoundary>
    );
};
