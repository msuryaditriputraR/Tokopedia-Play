import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [isDetailPage, setIsDetailPage] = useState(false);

  return (
    <PageContext.Provider value={{ isDetailPage, setIsDetailPage }}>
      {children}
    </PageContext.Provider>
  );
};
