'use client'
import { FC, PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from './store';
import { Provider } from 'react-redux';

export const Providers: FC<PropsWithChildren> = ({ children }) => {

    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
    );
};