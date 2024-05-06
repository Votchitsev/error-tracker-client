import React, { useEffect } from 'react';
import { onErrorHandler } from './onErrorHandler';

interface IProps {
    app_token: string,
    server_url: string,
    children: React.ReactNode,
}

const CatchErrorProvider = ({ app_token, server_url, children }: IProps) => {
    useEffect(() => {
        window.addEventListener('unhandledrejection', (e) => {
            console.error(e.reason);
        });

        window.addEventListener('error', (e) => {
            console.log('error >', e);
            
            onErrorHandler(app_token, server_url, e.error);
        });

        return () => {
            window.removeEventListener('unhandledrejection', (e) => {
                console.error(e.reason);
            });

            window.removeEventListener('error', (e) => {
                console.error(e.error);
            })
        }
    }, []);

    return (
        <>
            { children }
        </>
    );
};

export default CatchErrorProvider;
