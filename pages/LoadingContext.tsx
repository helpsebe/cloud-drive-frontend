import React, { useState } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const LoadingContext = React.createContext({} as LoadingContextProps);

export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => React.useContext(LoadingContext);

export default useLoading;
