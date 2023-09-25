import { isAtContainer } from '@utils/function';
import { useTypedSelector } from './useTypedSelector.hook';

export const useCart = () => {
  const cart = useTypedSelector(state => state.cart);
  const isAtCart = (value: number | string) => isAtContainer(cart, value);
  return { cart, isAtCart };
};
