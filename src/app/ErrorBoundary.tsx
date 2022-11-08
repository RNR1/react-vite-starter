/**
 * Error Boundary
 *
 * This component will catch any uncaught errors in the app
 * and display a user-friendly screen instead of a white screen
 */
import * as React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import type { WithTranslation } from 'react-i18next';
import { Main } from 'components/Layout';
import { Link } from 'react-router-dom';
import Path, { AppPath } from 'routes/paths';
import { absolutePath, join } from 'utils/path.utils';

interface State {
  hasError: boolean;
  error?: Error;
}

interface Props extends React.PropsWithChildren<WithTranslation> {}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    if (import.meta.env.DEV) console.error({ error, errorInfo });
    this.setState({ error });
  }

  render(): React.ReactNode {
    const { hasError, error } = this.state;
    const { children, t } = this.props;
    if (!hasError) return children;
    return (
      <Main>
        <Wrapper>
          <Title>{t?.('title')}</Title>
          <p>{error?.message}</p>
          <Link to={absolutePath(join(Path.App, AppPath.Home))} reloadDocument>
            {t?.('home-link-caption')}
          </Link>
        </Wrapper>
      </Main>
    );
  }
}

export default withTranslation()(ErrorBoundary);

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
