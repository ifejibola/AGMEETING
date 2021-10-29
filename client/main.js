import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import App from './App';
// import "./styles.scss";

import { StrictMode } from 'react'
// import LocalizationProvider from '@material'
import { SettingsProvider } from './contexts/SettingsContext';
import { StyledEngineProvider } from '@mui/styled-engine';

ReactDOM.render(
    <StyledEngineProvider injectFirst>

        <SettingsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SettingsProvider>
    </StyledEngineProvider>
    , document.getElementById("root"));
