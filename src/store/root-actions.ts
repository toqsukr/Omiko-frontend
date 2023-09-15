import { actions as locationActions } from './location/location.slice';
import * as userActions from './user/user.actions';

export const rootActions = {
  ...userActions,
  ...locationActions
};
