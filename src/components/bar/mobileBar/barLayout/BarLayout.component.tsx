import { MOBILE_SIZE_LARGE } from '@constants/screens';
import { FC, PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './BarLayout.module.css';

const BarLayout: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery({ maxDeviceWidth: MOBILE_SIZE_LARGE });
  return isMobile && <div className={css.mainContainer}>{children}</div>;
};

export default BarLayout;
