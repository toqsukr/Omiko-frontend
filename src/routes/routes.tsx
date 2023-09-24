import Error from '@pages/error/error.page';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const REACT_ROUTER = createBrowserRouter([
  {
    path: ROUTES.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/home/Home.page')).default };
    },
    errorElement: <Error />
  }
]);
