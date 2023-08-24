import { Helmet } from 'react-helmet-async';
import Routes from 'routes';
import 'i18n';
import Providers from 'app/Providers';

const App = () => (
  <Providers withReactQueryDevTools>
    <Helmet defaultTitle="Vite Starter" titleTemplate="Vite Starter • %s" />
    <Routes />
  </Providers>
);

export default App;
