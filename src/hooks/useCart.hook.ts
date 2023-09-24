import { isAtCart } from '@utils/function';
import { useTypedSelector } from './useTypedSelector.hook';

export const useCart = () => {
  const cart = useTypedSelector(state => state.cart);
  return { cart, isAtCart };
};
