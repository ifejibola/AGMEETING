import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { authenticationService } from '../services/authentication.service';

export function redirectLogin () {
        const currentUser = authenticationService.currentUserValue;
        if (currentUser == null) {
            console.log('inside');
            // not logged in so redirect to login page with the return url
            return <Navigate to= '/login'  />
        }
}