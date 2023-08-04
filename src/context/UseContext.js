import { createContext, useContext, useState } from "react";
import React from "react";

// Create the global props context
const TitleContext = createContext();

// Export a custom hook to access the global props
const TitleProvider = ({ children }) => {
  const [titleBanner, setTitleBanner] = useState("");
  return (
    <TitleContext.Provider value={titleBanner}>
      {children}
    </TitleContext.Provider>
  );
}
export { TitleContext, TitleProvider };
