import { createContext, useState } from "react";

export const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "Explore",
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};
