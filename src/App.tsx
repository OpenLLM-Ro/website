import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/layout/router';
import { theme } from 'src/layout/theme';
import { Footer } from 'src/layout/footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
