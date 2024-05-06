import { IError } from "./types";


export const onErrorHandler = (app_token: string, server_url: string, error: Error) => {
    const requestData: IError = {
        app_token,
        error_text: error.message,
        error_stack: error.stack || '',        
    }

    fetch(`${server_url}/error-tracker/api/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    });
};
