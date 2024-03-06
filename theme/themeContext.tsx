// ThemeContext.tsx
'use client';

import React, { createContext, useContext, ReactNode, useState, FunctionComponent } from 'react';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ThemeA, ThemeB, ThemeC, ThemeD, cssVariablesResolver  } from '@/theme'; 

// Extend the Mantine theme with a brandAssets field
interface ExtendedTheme extends MantineThemeOverride {
  brandAssets: {
    name: string; // Name of brand
    logo: string; // Path to the theme-specific logo
    logoWidth: number;
    logoHeight: number;
  };
}

interface ThemeContextType {
  theme: ExtendedTheme;
  switchTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ExtendedTheme>({ ...ThemeA, brandAssets: { 
    name: 'Spirax Group', 
    logo: '/themes/themeA/spirax_group_logo.png',
    logoWidth: 65.38,
    logoHeight: 25  
  } });

  const switchTheme = (themeName: string): void => {
    switch (themeName) {
      case 'ThemeA':
        setTheme({ ...ThemeA, brandAssets: { 
          name: 'Spirax Group', 
          logo: '/themes/themeA/spirax_group_logo.png',
          logoWidth: 65.38,
          logoHeight: 25      
        } });
        break;      
      case 'ThemeB':
        setTheme({ ...ThemeB, brandAssets: { 
          name: 'Spirax Sarco', 
          logo: '/themes/themeB/spirax_sarco_logo.svg', 
          logoWidth: 85.5,
          logoHeight: 25          
        } });
        break;
      case 'ThemeC':
        setTheme({ ...ThemeC, brandAssets: { 
          name: 'Watson Marlow', 
          logo: '/themes/themeC/wm_logo.svg',
          logoWidth: 77.25,
          logoHeight: 25   
         } });
        break;
      case 'ThemeD':
        setTheme({ ...ThemeD, brandAssets: { 
          name: 'Chromalox', 
          logo: '/themes/themeD/chromalox_logo.svg',
          logoWidth: 100.51,
          logoHeight: 25   
         } });
        break;
      default:
        setTheme({ ...ThemeA, brandAssets: { 
          name: 'SxS Corporate', 
          logo: '/themes/themeA/spirax_group_logo.svg',
          logoWidth: 65.38,
          logoHeight: 25    
        } }); // Default to ThemeA
    }
  };

  // Include MantineProvider here, passing `theme` as the `theme` prop
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} defaultColorScheme="auto">
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