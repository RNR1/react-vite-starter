import Home from './Home';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import MainLayout from './Layout';
import ErrorBoundary from './ErrorBoundary';

const Screen = { Login, Logout, Home };
export default Screen;

export const Layout = {
  Main: MainLayout,
};

export const ErrorElement = { Main: ErrorBoundary };
