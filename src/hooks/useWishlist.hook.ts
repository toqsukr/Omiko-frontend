import { isAtContainer } from '@utils/function';
import { useTypedSelector } from './useTypedSelector.hook';

export const useWishlist = () => {
  const wishlist = useTypedSelector(state => state.wishlist);
  const isAtWishlist = (value: number | string) => isAtContainer(wishlist, value);
  return { wishlist, isAtWishlist };
};
