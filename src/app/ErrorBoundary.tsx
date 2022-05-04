/**
 * Error Boundary
 *
 * This component will catch any error in you app
 * and will display a user friendly message instead of a white screen
 *
 */
import * as React from 'react';
import styled from 'styled-components';
import { TFunction, useTranslation } from 'react-i18next';
import { Main } from 'components/Layout';
import { Link } from 'react-router-dom';
import Path from 'routes/paths';

interface State {
  hasError: boolean;
  error?: Error;
}

interface Props extends React.PropsWithChildren<{}> {
  t?: TFunction<'translation', undefined>;
}

const withTranslation = (Component: typeof ErrorBoundary) => (props: Props) => {
  const { t } = useTranslation('error-boundary');

  return <Component {...props} t={t} />;
};

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
          <Link to={Path.Home} reloadDocument>
            {t?.('home-link-caption')}
          </Link>
        </Wrapper>
      </Main>
    );
  }
}

export default withTranslation(ErrorBoundary);

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
