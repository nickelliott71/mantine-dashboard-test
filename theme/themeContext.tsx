// ThemeContext.tsx
import React, { createContext, useContext, ReactNode, useState, FunctionComponent } from 'react';
import { MantineProvider } from '@mantine/core';
import { MantineThemeOverride } from '@mantine/core';
import { ThemeA, ThemeB, ThemeC, ThemeD  } from '@/theme'; 

interface ThemeContextType {
  theme: MantineThemeOverride;
  switchTheme: (brand: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<MantineThemeOverride>(ThemeA);

  const switchTheme = (brand: string): void => {
    switch (brand) {
      case 'ThemeA':
        setTheme(ThemeA);
        break;
      case 'ThemeB':
        setTheme(ThemeB);
        break;
      case 'ThemeC':
        setTheme(ThemeC);
        break;
      case 'ThemeD':
        setTheme(ThemeD);
        break;
      default:
        setTheme(ThemeA); // Default case
    }
  };

  // Include MantineProvider here, passing `theme` as the `theme` prop
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};

// Hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};