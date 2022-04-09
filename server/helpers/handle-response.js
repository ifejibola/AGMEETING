import { authenticationService } from '../services/authentication.service';

export function handleResponse(response) {
    // Check if user login successfully based on the statusText from the response from the api.
    // For testing, you can do console.log the response
    if (!(response.statusText == "OK")) {
        authenticationService.logout();
        location.reload();

        const error = response.statusText;
        return Promise.reject(error);
    }
    return response;
}