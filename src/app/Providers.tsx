import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ErrorBoundary from 'app/ErrorBoundary';
import StylesProvider from 'styles/Provider';
import StoreProvider from 'store/Provider';

type Props = React.PropsWithChildren<{ withReactQueryDevTools?: boolean }>;

const Providers = ({ children, withReactQueryDevTools = false }: Props) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <StylesProvider>
        <ErrorBoundary>
          <StoreProvider>
            <QueryClientProvider client={queryClient}>
              {children}
              {withReactQueryDevTools && (
                <ReactQueryDevtools initialIsOpen={false} />
              )}
            </QueryClientProvider>
          </StoreProvider>
        </ErrorBoundary>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default Providers;
