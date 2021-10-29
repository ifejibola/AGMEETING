import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {SettingsProvider} from './contexts/SettingsContext';
import {StyledEngineProvider} from '@mui/styled-engine';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <SettingsProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SettingsProvider>
    </StyledEngineProvider>, document.getElementById("root"));
