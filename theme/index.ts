import { ActionIcon, createTheme, Loader } from '@mantine/core';

export { ThemeProvider } from './themeContext';
export { useTheme } from './themeContext';

// Theme 1 - Spirax Slate (Corporate)
export const ThemeA = createTheme({
  colors: {
    brand: [
      "#DBE1E4",
      "#BDC7CE",
      "#9EADB7",
      "#7A8F9C",
      "#5C7585",
      "#3D5C6F",
      "#1F4258",
      "#002841",
      "#001929",
      "#00090F"
    ],
  },
  primaryColor: 'brand',
  defaultRadius: 'md',
  focusRing: 'always',
  fontFamily: 'Inter, Open Sans, sans-serif',
  headings: { fontFamily: 'Inter, Open Sans, sans-serif' },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
});

// Theme 2 - Steam (Current SBD)
export const ThemeB = createTheme({
  colors: {
    brand: [
      "#DFE5ED",
      "#BFCADC",
      "#A0B0CA",
      "#98AAC6",
      "#607CA7",
      "#416295",
      "#214784",
      "#012D72",
      "#082149",
      "#061327"
    ],
  },
  primaryColor: 'brand',
  defaultRadius: 'md',
  focusRing: 'always',
  fontFamily: 'Inter, Open Sans, sans-serif',
  headings: { fontFamily: 'Inter, Open Sans, sans-serif' },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
});

// Theme 3 - Watson Marlow 
export const ThemeC = createTheme({
  colors: {
    brand: [
      "#F4FAFC",
      "#E7F4FA",
      "#D8EDF6",
      "#C3E4F2",
      "#B1DCEE",
      "#8ECCE6",
      "#5AB5DA",
      "#269ECF",
      "#1A7397",
      "#114A61"
    ],
  },
  primaryColor: 'brand',
  defaultRadius: 'md',
  focusRing: 'always',
  fontFamily: 'Inter, Open Sans, sans-serif',
  headings: { fontFamily: 'Inter, Open Sans, sans-serif' },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
});

// Theme 4 - Chromalox 
export const ThemeD = createTheme({
  colors: {
    brand: [
      "#FDE3E4",
      "#FBCBCD",
      "#F9B3B6",
      "#F79B9F",
      "#F48288",
      "#F26A71",
      "#F0525A",
      "#EE3A43",
      "#C52F36",
      "#9B2329"
    ],
  },
  primaryColor: 'brand',
  defaultRadius: 'md',
  focusRing: 'always',
  fontFamily: 'Inter, Open Sans, sans-serif',
  headings: { fontFamily: 'Inter, Open Sans, sans-serif' },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
});