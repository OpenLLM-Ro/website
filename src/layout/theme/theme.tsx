import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-slab';
import '@fontsource/montserrat';
import '@fontsource/montserrat/600.css';

export const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
    heading: `'Montserrat', sans-serif`,
  },
  defaultProps: {
    fontWeight: 'thin',
  },
  components: {
    Button: {
      variants: {
        footer: {
          fontWeight: 'thin',
        },
      },
    },
  },
});
