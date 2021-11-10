import * as React from 'react';

const CountButton: React.FC<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ count, setCount }) => (
  <button type="button" onClick={() => setCount((prev) => prev + 1)}>
    count is:
    {count}
  </button>
);

export default CountButton;
