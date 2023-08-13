import { FC, PropsWithChildren } from 'react';
import ProfileShowProvider from '../ProfileShowProvider';
import SignShowProvider from '../SignShowProvider';
import LoginShowProvider from '../LoginShowProvider';
import DeliveryDetailShowProvider from '../DeliveryDetailShowProvider';

const RootShowProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DeliveryDetailShowProvider>
      <LoginShowProvider>
        <ProfileShowProvider>
          <SignShowProvider>{children}</SignShowProvider>
        </ProfileShowProvider>
      </LoginShowProvider>
    </DeliveryDetailShowProvider>
  );
};

export default RootShowProvider;
