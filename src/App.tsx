import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import CountButton from 'components/Button';
import logo from 'logo.svg';
import 'App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const routes: RouteObject[] = [
    {
      path: 'hello',
      element: (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
            <p>
              <CountButton count={count} setCount={setCount} />
            </p>
            <p>
              Edit
              <code>App.tsx</code>
              and save to test HMR updates.
            </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              {' | '}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
            </p>
          </header>
        </div>
      ),
    },
  ];

  const element = useRoutes(routes);

  return element;
}

export default App;
