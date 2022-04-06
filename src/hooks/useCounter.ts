import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CounterSelector from 'store/selectors/counter.selectors';
import * as Action from 'store/reducers/counter.reducer';

const useCounter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(CounterSelector.count);

  const increment = React.useCallback(
    () => dispatch(Action.increment()),
    [dispatch],
  );

  const decrement = React.useCallback(
    () => dispatch(Action.decrement()),
    [dispatch],
  );

  return { count, increment, decrement };
};

export default useCounter;
