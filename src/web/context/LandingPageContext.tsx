import React, { createContext, useState, ReactNode, useContext } from "react";
import { Style, style as tw } from 'twrnc';

// Define the shape of the context
interface ContextType {
  marginX: string;
  h1Size: string;
  smallFontSize: string;
  headingStyle: Style | undefined
}

// Create the context with a default value
const LayoutContext = createContext<ContextType>({
  marginX: '',
  h1Size: '',
  smallFontSize: '',
  headingStyle: undefined
});

// Define the provider's props
interface ProviderProps {
  children: ReactNode;
}

// Create a provider component
export const LandingPageProvider: React.FC<ProviderProps> = ({ children }) => {
  const marginX: string = "mx-8";
  const h1Size: string = 'text-[24px] md:text-[48px]';
  const smallFontSize: string = 'text-[0.55rem]/[0.10rem]';
  const headingStyle = tw(`${h1Size}`, 'text-[rgba(20, 30, 70, 1)]', 'font-extrabold');

  return (
    <LayoutContext.Provider value={{ marginX, h1Size, smallFontSize, headingStyle }}>
      {children}
    </LayoutContext.Provider>
  );
};

// Custom hook for accessing the ThemeContext
export const useLandingPageContext = (): ContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
