import * as React from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  }, []);

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
};

export default useScrollPosition;
