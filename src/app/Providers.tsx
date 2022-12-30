import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from 'app/ErrorBoundary';
import StylesProvider from 'styles/Provider';
import StoreProvider from 'store/Provider';
import AuthContextProvider from 'contexts/AuthContext';

type Props = React.PropsWithChildren<{ withReactQueryDevTools?: boolean }>;

const Providers = ({ children, withReactQueryDevTools = false }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <StylesProvider>
      <ErrorBoundary>
        <StoreProvider>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              {children}
              {withReactQueryDevTools && (
                <ReactQueryDevtools initialIsOpen={false} />
              )}
            </AuthContextProvider>
          </QueryClientProvider>
        </StoreProvider>
      </ErrorBoundary>
    </StylesProvider>
  );
};

export default Providers;
