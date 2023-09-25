import { actions as cartActions } from './cart/cart.slice';
import { actions as locationActions } from './location/location.slice';
import { actions as mobileBarActions } from './mobileBar/mobileBar.slice';
import * as userActions from './user/user.actions';
import { actions as wishlistActions } from './wishlist/wishlist.slice';

export const rootActions = {
  ...userActions,
  ...locationActions,
  ...mobileBarActions,
  ...cartActions,
  ...wishlistActions
};
