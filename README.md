# Starter React-Vite Boilerplate

This is an a starter boiler plate for React + Vite with:

- TypeScript
- ESLint (Code style guide - AirBnB, React Hooks, Absolute imports resolver).
- Prettier (Code formatting).
- Husky, Commitlint, Lint-staged (Git Hooks - Angular config).
- Axios (HTTP Client).
- styled-components (Styling).
- React Router (V6) (Client-side routing).
- Redux-Toolkit (State Management).
- Storybook (Design System).
- React-i18next (Internationalization).
- React testing library (Testing).

## Installation:

- Clone and npm i.
- Run `cp .env.example .env` to create a .env file for environment variables.
- Run `npm run dev`.
- Navigate to `localhost:3000`.

## Style Guides

- Javascript/React: [AirBnB](https://github.com/airbnb/javascript).
- Commit Message Format: [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).
- [Styled-components & Material-UI](https://levelup.gitconnected.com/material-ui-styled-components-fff4d345fb07).

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
