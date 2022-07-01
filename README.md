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

## Installation:

- Clone and npm i.
- Run `cp .env.example .env` to create a .env file for environment variables (use PS on windows).
- Run `npm run dev`.
- Navigate to `localhost:3000`.

## Style Guides

- Javascript/React: [AirBnB](https://github.com/airbnb/javascript).
- Commit Message Format: [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## Folder Structure:

```
src
├── screens                                     # app screens
│       └── <ScreenName>
│                 ├── Screen.tsx                # Screen declaration
│                 ├── Screen.test.tsx           # Unit tests
│                 ├── <Nested>                  # Nested routes/screen-specific components
│                 └── package.json              # Main file declaration for neat imports
│
├── constants                                   # app config & constants
├── components
│       └── <ComponentName>
│               ├── ComponentName.tsx           # Component declaration
│               ├── ComponentName.stories.tsx   # Storybook templates
│               ├── ComponentName.test.tsx      # Unit tests
│               └── package.json                # Main file declaration for neat imports
├── i18n                                        # internationalization
├── assets                                      # assets folder
├── icons                                       # svg to JSX icons
├── routes                                      # routing
│     ├── Routes.tsx                            # Routing tree declaration
│     └── paths.tsx                             # route paths
├── style
│     ├── index.ts                              # global styles will be here
│     ├── shared.ts                             # shared styled components
│     ├── theme.ts                              # styled-components theme
│     └── Provider.tsx                          # styled-components theme provider
├── store
│     ├── index.ts                              # store declaration
│     ├── reducers
│     │      ├── index.ts                       # exports combined reducer
│     │      └── <reducerName.reducer>.ts
│     ├── selectors                             # selectors folder
│     │      └── <reducerName.selector>.ts      # name should be related to reducer name
│     ├── hooks.ts                              # Typed React Redux hooks (useSelector, useDispatch)
│     └── Provider.tsx                          # Redux store provider (handy for unit testing)
├── api
│     ├── client.ts                              # API client declaration
│     ├── methods.ts                             # API endpoint methods
│     ├── response.ts                            # responses type definitions
│     └── payload.ts                             # request payload type definitions.
└── app
      ├── app.tsx                                # App entry file.
      ├── ErrorBoundary.tsx                      # Error boundary.
      └── Providers.tsx                          # App providers wrapper.
```

## Available Scripts

- `dev`: Run dev server
- `build`: Run build (will be outputted into `dist` directory)
- `serve`: Serve a preview of the production build (not optimized for production use, just for preview)
- `test`: Run vitest unit tests on watch mode
- `lint`: Run ESLint on the entire project
- `format`: Run Prettier code formatting on the entire project
- `generate-icons`: Generate JSX components from all the icons from the `assets/icons` directory (the output will be accessible in the `icons` directory
- `storybook`: Run storybook design system
