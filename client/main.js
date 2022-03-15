import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {SettingsProvider} from './contexts/SettingsContext';
import {StyledEngineProvider} from '@mui/styled-engine';
import {Provider} from "react-redux";
import store from './store'

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <Provider store={store}>
            <SettingsProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </SettingsProvider>
        </Provider>
    </StyledEngineProvider>, document.getElementById("root"));
