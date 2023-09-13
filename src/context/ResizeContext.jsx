import React, { createContext, useState, useEffect } from "react";

const ResizeContext = createContext();

export function ResizeProvider({ children }) {
  const [resizeWidth, setResizeWidth] = useState(window.innerWidth / 1920);
  const [resizeHeight, setResizeHeight] = useState(window.innerHeight / 1080);

  const resizeRatio = () => {
    setResizeWidth(window.innerWidth / 1920);
    setResizeHeight(window.innerHeight / 1080);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeRatio);
    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [resizeWidth, resizeHeight]);

  return (
    <ResizeContext.Provider value={{ resizeWidth, resizeHeight }}>
      {children}
    </ResizeContext.Provider>
  );
}

export default ResizeContext;
