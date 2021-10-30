import React, {useEffect} from "react";
import routes from "./routes";
import {ThemeProvider} from '@mui/material/styles';
import {createCustomTheme} from '../config/theme';
import RTL from './RTL'
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";
import {useRoutes} from "react-router";

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
};
