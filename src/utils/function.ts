import { ICartInitialState } from '@store/cart/cart.interface';

export const trimString = (value: string, length: number) =>
  value.length > length ? `${value.slice(0, length - 1)}...` : value;
export const isAtCart = (container: ICartInitialState[], id: number | string) =>
  container.reduce((accumulator, element) => accumulator || element.id === id, false);
