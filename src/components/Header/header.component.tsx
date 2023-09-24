import { MOBILE_SIZE_LARGE } from '@constants/screens';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from './headerDesktop/headerDesktop.component';
import HeaderMobile from './headerMobile/headerMobile.component';

const Header: FC = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: MOBILE_SIZE_LARGE });
  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
};

export default Header;
