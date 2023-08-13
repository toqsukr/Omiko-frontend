import { useState, createContext, FC, PropsWithChildren } from 'react';

export const LoginShowContext = createContext({
  isLogin: false,
  setIsLogin: (value: boolean) => {
    value;
  },
});

const LoginShowProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginShowContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginShowContext.Provider>
  );
};

export default LoginShowProvider;
