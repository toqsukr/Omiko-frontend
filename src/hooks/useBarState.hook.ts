import { useTypedSelector } from './useTypedSelector.hook';

export const useBarState = () => {
  const mobileBarState = useTypedSelector(state => state.mobileBar);
  return { mobileBarState };
};
