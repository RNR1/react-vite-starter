import * as React from 'react';

export default function useOnClickOutside<T extends HTMLElement>(
  handler: () => void,
  event: keyof DocumentEventMap = 'mousedown',
) {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const listener: EventListener = (ev) => {
      if (ref.current?.contains(ev.target as Node)) return;
      handler();
    };

    document.addEventListener(event, listener);
    return () => {
      document.removeEventListener(event, listener);
    };
  }, [ref, handler, event]);

  return [ref];
}
