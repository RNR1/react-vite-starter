import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => (
  <Main>
    <Outlet />
  </Main>
);

export const Main = styled.main.attrs({ className: 'main' })`
  text-align: center;
  background-color: #282c34;
  color: white;
  height: inherit;
  padding: 1rem;
`;

export default Layout;
