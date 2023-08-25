import { FC, PropsWithChildren } from 'react';
import SignShowProvider from '../SignShowProvider';

const RootShowProvider: FC<PropsWithChildren> = ({ children }) => {
  return <SignShowProvider>{children}</SignShowProvider>;
};

export default RootShowProvider;
