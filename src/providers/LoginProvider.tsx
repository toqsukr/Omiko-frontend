import { useState, createContext, FC, PropsWithChildren } from 'react';

export const LoginContext = createContext({
  isLogin: false,
  setIsLogin: (value: boolean) => {
    value;
  },
});

const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
