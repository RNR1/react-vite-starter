import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles';
import theme from 'styles/theme';

const StylesProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StylesProvider;
