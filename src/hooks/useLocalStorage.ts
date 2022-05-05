import * as React from 'react';

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

/**
 * a Custom hook for managing localStorage value within React state
 * @param key - string
 * @param initialValue - T
 * @returns [T, React.Dispatch<React.SetStateAction<T>>]
 */
const useLocalStorage = <T>(key: string, initialValue: T): ReturnType<T> => {
  const [value, setValue] = React.useState<T>(() => {
    if (typeof initialValue === 'undefined')
      throw Error('no valid key was provided');
    try {
      const resource = localStorage.getItem(key);
      return resource ? JSON.parse(resource) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // no-op
    }
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
