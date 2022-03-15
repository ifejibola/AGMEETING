import { authenticationService } from '../services/authentication.service';

export function handleResponse(response) {

    if (!(response.statusText == "OK")) {
        authenticationService.logout();
        location.reload();

        const error = response.statusText;
        return Promise.reject(error);
    }
    return response;
}