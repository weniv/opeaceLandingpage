import { debounce } from 'lodash';
import React, { createContext, useState, useEffect, useContext } from 'react';

const ResizeContext = createContext();

export function ResizeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(!matchMedia('screen and (min-width: 768px)').matches);

  const resizeRatio = debounce(() => {
    // console.log('innerWidth', window.innerWidth);
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', resizeRatio);

    return () => {
      window.removeEventListener('resize', resizeRatio);
    };
  }, []);

  return <ResizeContext.Provider value={{ isMobile }}>{children}</ResizeContext.Provider>;
}

export function useResizeContext() {
  return useContext(ResizeContext);
}
