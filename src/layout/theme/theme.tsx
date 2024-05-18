import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/montserrat';
import '@fontsource/montserrat/600.css';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...config,
  fonts: {
    body: `'Montserrat', sans-serif`,
    heading: `'Montserrat', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'thin',
      },
    },
  },
});
