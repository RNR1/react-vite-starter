import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => (
  <Container>
    <h2>There&apos;s nothing here.</h2>
    <Link to="/">Take me home</Link>
  </Container>
);

export default NotFound;

const Container = styled.section`
  ${({ theme }) => theme.utils.centerFlex};
  flex-direction: column;
  height: 100%;
  h2 {
    font-size: 4rem;
    margin: 10px;
  }

  a {
    font-size: 2rem;
  }
`;
