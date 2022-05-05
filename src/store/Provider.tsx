import * as React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
