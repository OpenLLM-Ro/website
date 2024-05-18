import { extendTheme } from '@chakra-ui/react';
import '@fontsource/montserrat';
import '@fontsource/montserrat/600.css';

export const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
    heading: `'Montserrat', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'thin',
      },
      variants: {
        news: {
          fontFamily: 'monospace',
          justifyContent: 'flex-start',
          _hover: {
            color: 'blue.200',
          },
        },
      },
    },
    Text: {
      variants: {
        news: {
          fontFamily: 'monospace',
          justifyContent: 'flex-start',
          fontSize: 'md',
          paddingLeft: '16px',
          _hover: {
            color: 'blue.200',
          },
        },
      },
    },
  },
});
