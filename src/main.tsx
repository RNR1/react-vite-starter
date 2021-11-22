import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import StylesProvider from 'styles/Provider';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
