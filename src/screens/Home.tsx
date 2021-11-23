import * as React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Logo from 'components/Logo';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CounterSelector from 'store/selectors/counter.selectors';
import { decrement, increment } from 'store/reducers/counter.reducer';
import { Trans, useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');
  const dispatch = useAppDispatch();
  const count = useAppSelector(CounterSelector.count);

  return (
    <Container>
      <Header>
        <Logo />
        <p>{t('hello-vite')}</p>
        <p>{count}</p>
        <div>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button onClick={() => dispatch(increment())}>+</Button>
        </div>
        <p>
          <Trans t={t} i18nKey="cta" components={[<Code />]} />
        </p>
        <p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {' | '}
          <Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </p>
      </Header>
    </Container>
  );
};

export default Home;

const Container = styled.section.attrs({ className: 'home-container' })`
  text-align: center;
`;

const Header = styled.header.attrs({ className: 'home-header' })`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Link = styled.a.attrs({
  className: 'App-link',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: #61dafb;
`;

const Code = styled.code`
  background: ${({ theme }) => theme.colors.lightGray};
  color: black;
  border-radius: 12px;
  padding: 0.2rem;
  margin: 0.5rem;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`;
