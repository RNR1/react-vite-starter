import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Main } from 'screens/Layout';
import { Link, useRouteError } from 'react-router-dom';
import Path, { AppPath } from 'routes/paths';
import { absolutePath, join } from 'utils/path.utils';
import { StatusCode } from 'api/types';

/**
 * Error Boundary
 *
 * This component will catch any uncaught errors in the app
 * and display a user-friendly screen instead of a white screen
 */
const ErrorBoundary = () => {
  const error = useRouteError() as Response;

  const { t } = useTranslation('error-boundary');

  if (import.meta.env.DEV) console.error({ error });

  const errorMessage = (status: number) => {
    switch (status) {
      case StatusCode.NOT_FOUND:
        return {
          title: t('not-found.title'),
          subtitle: t('not-found.subtitle'),
        };

      case StatusCode.FORBIDDEN:
        return {
          title: t('unauthorized.title'),
          subtitle: t('unauthorized.subtitle'),
        };

      default:
        return {
          title: t('server-error.title'),
          subtitle: t('server-error.subtitle'),
        };
    }
  };

  const { title, subtitle } = errorMessage(error.status);

  return (
    <Main>
      <Wrapper>
        <Title>{title}</Title>
        <p>{subtitle}</p>
        <Link to={absolutePath(join(Path.App, AppPath.Home))} reloadDocument>
          {t?.('home-link-caption')}
        </Link>
      </Wrapper>
    </Main>
  );
};

export default ErrorBoundary;

const Wrapper = styled.section`
  position: relative;
  top: 20vh;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1.attrs({ className: 'error-boundary-title' })`
  margin: 0;
  font-size: 3rem;
`;
