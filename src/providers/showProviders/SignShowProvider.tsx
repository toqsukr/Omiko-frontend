import { useState, createContext, FC, PropsWithChildren } from 'react';

export const SignShowContext = createContext({
  sign: false,
  setSign: (value: boolean) => {
    value;
  }
});

const SignShowProvider: FC<PropsWithChildren> = ({ children }) => {
  const [sign, setSign] = useState(false);
  return <SignShowContext.Provider value={{ sign, setSign }}>{children}</SignShowContext.Provider>;
};

export default SignShowProvider;
