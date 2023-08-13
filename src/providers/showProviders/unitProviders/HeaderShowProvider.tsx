import { FC, PropsWithChildren } from 'react';
import LocationShowProvider from '../LocationShowProvider';

const HeaderShowProvider: FC<PropsWithChildren> = ({ children }) => {
  return <LocationShowProvider>{children}</LocationShowProvider>;
};

export default HeaderShowProvider;
