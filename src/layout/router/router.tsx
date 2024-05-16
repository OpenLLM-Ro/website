import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from 'src/components/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
