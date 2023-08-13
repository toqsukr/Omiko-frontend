import { FC, PropsWithChildren } from 'react';
import ProfileShowProvider from './ProfileShowProvider';
import LocationShowProvider from './LocationShowProvider';
import LoginShowProvider from './LoginShowProvider';

const RootShowProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LocationShowProvider>
      <LoginShowProvider>
        <ProfileShowProvider>{children}</ProfileShowProvider>
      </LoginShowProvider>
    </LocationShowProvider>
  );
};

export default RootShowProvider;
