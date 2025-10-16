import { useAppDispatch, useAppSelector } from 'store/hooks';
import CounterSelector from 'store/selectors/counter.selectors';
import * as Action from 'store/reducers/counter.reducer';

type UseCounterReturn = {
  count: number;
  increment: VoidFunction;
  decrement: VoidFunction;
};
/**
 * An example for a custom hook that wraps a redux state selectors
 * and actions and provides a summary of the store usage
 * @returns count: number, increment: VoidFunction, decrement: VoidFunction
 */
const useCounter = (): UseCounterReturn => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(CounterSelector.count);

  const increment: VoidFunction = () => {
    dispatch(Action.increment());
  };

  const decrement: VoidFunction = () => {
    dispatch(Action.decrement());
  };

  return { count, increment, decrement };
};

export default useCounter;
