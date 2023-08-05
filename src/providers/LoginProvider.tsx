import { useState, createContext, ReactNode } from 'react';

export const LoginContext = createContext({
  isLogin: false,
  setIsLogin: (value: boolean) => {
    value;
  },
});

interface Props {
  children?: ReactNode;
}

export default function LoginProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
