# Starter React-Vite Boilerplate

This is a starter boilerplate for React + Vite with:

- [TypeScript](https://www.typescriptlang.org/).
- [ESLint](https://eslint.org/) (Code style guides - [AirBnB](https://github.com/airbnb/javascript), [React Hooks](https://reactjs.org/docs/hooks-rules.html), [Absolute imports resolver](https://www.npmjs.com/package/eslint-import-resolver-typescript)).
- [Prettier](https://prettier.io/) (Code formatting).
- [Husky](https://typicode.github.io/husky/#/), [Commitlint](https://commitlint.js.org/#/), [Lint-staged](https://github.com/okonet/lint-staged) (Git Hooks + [Angular commit style guide](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)).
- [React-Query](https://react-query.tanstack.com/) (API calls hooks).
- [Axios](https://axios-http.com/) (HTTP Client).
- [styled-components](https://styled-components.com/) (Styling).
- [React Router (V6)](https://reactrouter.com/) (Client-side routing).
- [Redux-Toolkit](https://redux-toolkit.js.org/) (State Management).
- [Storybook](https://storybook.js.org/) (Design System).
- [React-i18next](https://react.i18next.com/) (Internationalization).
- [Vitest](https://vitest.dev/) (Unit tests framework)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/) (DOM testing).

## Installation

### Prerequisites

- Make sure to have `pnpm` installed.

### Steps

- Clone and `pnpm i`.
- Run `cp .env.example .env` to create a .env file for environment variables (use PS on windows).
- Run `pnpm run dev`.
- Navigate to `localhost:3000`.

## Style Guides

- Javascript/React: [AirBnB](https://github.com/airbnb/javascript).
- Commit Message Format: [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## Folder Structure

```shell
src
├── api
│     ├── client.ts                             # API client factory
│     ├── types.ts                              # API global types
│     ├── utils.ts                              # API utilities
│     └── clients                               # API clients declaration
│           └── <client>
│                 ├── client.ts                 # API instance
│                 ├── methods.ts                # API endpoint methods
│                 ├── params.ts                 # API query params definitions
│                 ├── payload.ts                # Request payload type definitions
│                 ├── response.ts               # Responses type definitions
│                 └── transform.ts              # Response transform functions
├── app
│     ├── app.tsx                               # App entry file
│     ├── ErrorBoundary.tsx                     # Error boundary
│     └── Providers.tsx                         # App providers wrapper
├── assets                                      # Assets folder
├── components
│       └── <ComponentName>
│               ├── ComponentName.tsx           # Component declaration
│               ├── ComponentName.stories.tsx   # Storybook templates
│               ├── ComponentName.test.tsx      # Unit tests
│               └── package.json                # Main file declaration for neat imports
├── constants                                   # App config & constants
├── contexts                                    # React context declarations
├── hooks                                       # Custom hooks
├── i18n                                        # Internationalization
├── icons                                       # SVG to JSX generated icons
├── mocks                                       # Mock data for testing
├── models                                      # Internal app models declaration
├── providers                                   # Routing providers
├── routes                                      # routing
│     ├── Routes.tsx                            # Routing tree declaration
│     └── paths.tsx                             # route paths
├── screens                                     # App screens
│       └── <ScreenName>
│                 ├── Screen.tsx                # Screen declaration
│                 ├── Screen.test.tsx           # Unit tests
│                 ├── <Nested>                  # Nested routes/screen-specific components
│                 └── package.json              # Main file declaration for neat imports
├── store
│     ├── index.ts                              # Store declaration
│     ├── reducers
│     │      ├── index.ts                       # Exports combined reducer
│     │      └── <reducerName.reducer>.ts
│     ├── selectors                             # Selectors folder
│     │      └── <reducerName.selector>.ts      # Name should be related to reducer name
│     ├── hooks.ts                              # Typed React Redux hooks (useSelector, useDispatch)
│     └── Provider.tsx                          # Redux store provider (handy for unit testing)
├── styles
│     ├── index.ts                              # Global styles
│     ├── shared.ts                             # Shared styled components
│     ├── theme.ts                              # styled-components theme
│     └── Provider.tsx                          # styled-components theme provider
└── utils                                       # Utility functions


```

## Available Scripts

- `dev`: Run dev server
- `build`: Run build (will be outputted into `dist` directory)
- `serve`: Serve a preview of the production build (not optimized for production use, just for preview)
- `test`: Run vitest unit tests (watch mode)
- `test:run`: Run vitest unit tests (do not watch)
- `lint`: Run ESLint on the entire project
- `lint:knip`: Run Knip on the entire project to locate unused code
- `lint:spelling`: Runs cSpell cli to check for unknown words and typos
- `format`: Run Prettier code formatting on the entire project
- `isready`: Run format, lint, type-check, build and tests at once
- `generate-icons`: Generate JSX components from all the icons from the `assets/icons` directory (the output will be accessible in the `icons` directory
- `storybook`: Run storybook design system
- `release`: Generate a tagged release and update the changelog document
