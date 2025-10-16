import DocumentTitle from 'components/DocumentTitle/DocumentTitle';
import Routes from 'routes';
import 'i18n';
import Providers from 'app/Providers';

const App = () => (
  <Providers withReactQueryDevTools>
    <DocumentTitle title="Vite Starter" />
    <Routes />
  </Providers>
);

export default App;
