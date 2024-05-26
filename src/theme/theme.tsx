import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'var(--font-montserrat)',
      },
    },
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
