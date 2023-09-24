import { actions as cartActions } from './cart/cart.slice';
import { actions as locationActions } from './location/location.slice';
import { actions as mobileBarActions } from './mobileBar/mobileBar.slice';
import * as userActions from './user/user.actions';

export const rootActions = {
  ...userActions,
  ...locationActions,
  ...mobileBarActions,
  ...cartActions
};
