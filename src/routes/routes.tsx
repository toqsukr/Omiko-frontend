import Error from '@pages/error/Error.page';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const REACT_ROUTER = createBrowserRouter([
  {
    path: ROUTES.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/home/Home.page')).default };
    },
    errorElement: <Error />
  },
  {
    path: ROUTES.CART_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/cart/Cart.page')).default };
    },
    errorElement: <Error />
  }
]);
