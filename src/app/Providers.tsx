import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import StylesProvider from 'styles/Provider';
import store from 'store';

const Providers: React.FC = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <StylesProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Provider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default Providers;
