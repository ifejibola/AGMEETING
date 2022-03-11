import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {SettingsProvider} from './contexts/SettingsContext';
import {StyledEngineProvider} from '@mui/styled-engine';
import {UserProvider} from "./contexts/UserContext";

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <UserProvider>
            <SettingsProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </SettingsProvider>
        </UserProvider>
    </StyledEngineProvider>, document.getElementById("root"));
