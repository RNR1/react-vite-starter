import * as React from 'react';
import StylesProvider from '../src/styles/Provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider>
      <Story {...context} />
    </StylesProvider>
  );
};

export const decorators = [withThemeProvider];
