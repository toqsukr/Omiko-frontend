import { FC, PropsWithChildren } from 'react';
import DeliveryDetailShowProvider from '../DeliveryDetailShowProvider';
import ProfileShowProvider from '../ProfileShowProvider';
import SignShowProvider from '../SignShowProvider';

const RootShowProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DeliveryDetailShowProvider>
      <ProfileShowProvider>
        <SignShowProvider>{children}</SignShowProvider>
      </ProfileShowProvider>
    </DeliveryDetailShowProvider>
  );
};

export default RootShowProvider;
