import * as React from 'react';

/**
 * Custom hook for tracking the window scroll position
 * in browser environments
 *
 * @param initialValue - number
 * @returns number
 */
const useScrollPosition = (initialValue = 0) => {
  const [scrollPosition, setScrollPosition] =
    React.useState<number>(initialValue);

  const handleScroll = () => {
    const currentPosition = window?.pageYOffset ?? initialValue;
    setScrollPosition(currentPosition);
  };

  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('scroll', handleScroll);
    };
  });

  return scrollPosition;
};

export default useScrollPosition;
