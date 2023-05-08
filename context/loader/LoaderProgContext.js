import React, { createContext, useState } from "react";

const LoaderProgContext = createContext({
  showLoader: false,
  setLoaderProg: () => {},
});

export default LoaderProgContext;

export function LoaderProgContextProvider({ children }) {
  const [showLoader, setLoaderProg] = useState(false);

  return (
    <LoaderProgContext.Provider value={{ showLoader, setLoaderProg }}>
      {children}
    </LoaderProgContext.Provider>
  );
}
