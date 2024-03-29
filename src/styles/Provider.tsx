import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles';
import theme from 'styles/theme';

/**
 * Styles Provider
 *
 * This component will provide global styles and styling theme
 * to any wrapped children
 */
const StylesProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StylesProvider;
