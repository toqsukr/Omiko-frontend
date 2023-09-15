import { useTypedSelector } from './useTypedSelector.hook';

export const useLocation = () => {
  const { location } = useTypedSelector(state => state);
  return { location };
};
