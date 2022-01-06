import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useQuery, QueryStatus } from 'react-query';
import styled from 'styled-components';
import API from 'api/methods';
import { Post } from 'api/response';
import Button from 'components/Button';
import Logo from 'components/Logo';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CounterSelector from 'store/selectors/counter.selectors';
import { decrement, increment } from 'store/reducers/counter.reducer';
import Link from 'components/Link';
import List from 'components/List';

const Home = () => {
  const { t } = useTranslation('home');
  const dispatch = useAppDispatch();
  const count = useAppSelector(CounterSelector.count);

  const { data: posts, status } = useQuery<Post[]>('posts', API.getPosts, {
    initialData: [],
    retry: 1,
  });

  const title = postsTitle[status];

  return (
    <>
      <Header>
        <Logo />
        <p>{t('hello-vite')}</p>
      </Header>
      <p>{count}</p>
      <div>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>
      <p>
        <Link href="https://reactjs.org">{t('learn-react')}</Link>
        {' | '}
        <Link href="https://vitejs.dev/guide/features.html">
          {t('vite-docs')}
        </Link>
      </p>
      <h2>{title}</h2>
      <List
        items={posts?.slice(0, 3) ?? []}
        emptyStateElement={postsPlaceholders[status] as React.ReactElement}
        renderOption={({ title, id, body }) => (
          <li key={id}>
            <h3>
              <u>
                #{id}: {title}
              </u>
            </h3>
            <p>{body}</p>
          </li>
        )}
      />
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

const Code = styled.code`
  background: ${({ theme }) => theme.colors.lightGray};
  color: black;
  border-radius: 12px;
  padding: 0.2rem;
  margin: 0.5rem;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`;

const postsTitle: Record<QueryStatus, string> = {
  idle: 'Fetching Posts...',
  loading: 'Fetching Posts...',
  error: 'There was an error fetching your posts',
  success: 'Top 3 Posts',
};

const postsPlaceholders: Record<string, string | React.ReactElement> = {
  idle: 'Fetching...',
  loading: 'Fetching...',
  error: (
    <>
      Did you forget to create a<Code>&#39;.env&#39;</Code> file?
    </>
  ),
};
