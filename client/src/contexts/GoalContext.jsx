import { createContext } from "react";

export const GoalContext = createContext("");

export const GoalContextProvider = ({ children }) => {
  return <GoalContext.Provider value={{}}>{children}</GoalContext.Provider>;
};
