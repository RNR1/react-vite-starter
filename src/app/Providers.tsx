import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import StylesProvider from 'styles/Provider';
import StoreProvider from 'store/Provider';
import { queryClient } from 'api/client';

type Props = React.PropsWithChildren<{ withReactQueryDevTools?: boolean }>;

const Providers = ({ children, withReactQueryDevTools = false }: Props) => (
  <StylesProvider>
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        {withReactQueryDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </StoreProvider>
  </StylesProvider>
);

export default Providers;
