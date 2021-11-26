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
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/) (Unit tests).

## Installation:

- Clone and npm i.
- Run `cp .env.example .env` to create a .env file for environment variables.
- Run `npm run dev`.
- Navigate to `localhost:3000`.

## Style Guides

- Javascript/React: [AirBnB](https://github.com/airbnb/javascript).
- Commit Message Format: [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## Folder Structure:

```
src
├── screens                                       # app screens
│       └── ScreenName.tsx
│
├── constants                                   # app config & constants
│       └── <type.constants.ts>
├── components
│       └── <ComponentName>
│                └── ComponentName.tsx
├── i18n                                        # internationalization
├── assets                                      # assets folder
├── routes                                      # routing
├── style
│     ├── index.ts                              # global styles will be here
│     ├── shared.ts                             # shared styled components
│     ├── theme.ts                              # styled-components theme
│     └── Provider.tsx                          # styled-components theme provider
├── store
│     ├── reducers
│     │      ├── index.ts                       # exports combined reducer
│     │      └── <reducerName.reducer>.ts
│     ├── selectors                             # selectors folder
│     │      └── <reducerName.selector>.ts      # name should be related to reducer name
│     └── hooks.ts                              # Typed React Redux hooks (useSelector, useDispatch)
└── api
     ├── client.ts                              # api call
     ├── methods.ts                             # custom calls
     └── response.ts                            # responses types definition
```
