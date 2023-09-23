import { MobileBarState } from '@store/mobileBar/mobileBar.interface';
import { useEffect } from 'react';
import { useActions } from './useActions.hook';
import { useAuth } from './useAuth.hook';
import { useBarState } from './useBarState.hook';

export const useAuthEffect = () => {
  const { user } = useAuth();
  const { changeBarState } = useActions();
  const { mobileBarState } = useBarState();
  useEffect(() => {
    if (!!user && mobileBarState.barState === MobileBarState.SIGN) changeBarState(MobileBarState.PROFILE);
    else if (!!!user && mobileBarState.barState === MobileBarState.PROFILE)
      changeBarState(MobileBarState.SIGN);
  }, [user]);
};
