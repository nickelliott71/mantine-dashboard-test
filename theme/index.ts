import { ActionIcon, createTheme, Loader } from '@mantine/core';

export const myTheme = createTheme({
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
  headings: { fontFamily: 'Open Sans, sans-serif' },
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
