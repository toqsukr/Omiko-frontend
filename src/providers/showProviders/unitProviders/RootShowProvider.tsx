import { FC, PropsWithChildren } from 'react';
import ProfileShowProvider from '../ProfileShowProvider';
import SignShowProvider from '../SignShowProvider';

const RootShowProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ProfileShowProvider>
      <SignShowProvider>{children}</SignShowProvider>
    </ProfileShowProvider>
  );
};

export default RootShowProvider;
