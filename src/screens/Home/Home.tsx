import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import format from 'date-fns/format';
import Button from 'components/Button';
import StyledLogo from 'components/Logo';
import Link from 'components/Link';
import { useCounter } from 'hooks';

const Home = () => {
  const { t } = useTranslation('home');
  const { count, increment, decrement } = useCounter();

  const today = format(new Date(), 'eeee, do MMM yyyy');

  return (
    <>
      <Header>
        <StyledLogo />
        <p>{t('home.hello-vite', { user: 'User' })}</p>
      </Header>
      <p data-testid="today">Today is {today}</p>
      <p data-testid="counter">count is: {count}</p>
      <section className="buttons-container">
        <Button
          data-testid="decrement-button"
          role="button"
          onClick={decrement}
        >
          -
        </Button>
        <Button
          data-testid="increment-button"
          role="button"
          onClick={increment}
        >
          +
        </Button>
      </section>
      <p className="recommended-links">
        <Link href="https://reactjs.org">{t('home.learn-react')}</Link>
        {' | '}
        <Link href="https://vitejs.dev/guide/features.html">
          {t('home.vite-docs')}
        </Link>
      </p>
    </>
  );
};

export default Home;

const Header = styled.header.attrs({ className: 'home-header' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
