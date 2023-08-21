import { useState } from 'react';
import { SignMode } from '@components/sign/sign.d';

export function useSignMode() {
  const [signMode, setSignMode] = useState(SignMode.Login);

  const handleModeBtn = () =>
    setSignMode(signMode === SignMode.Register ? SignMode.Login : SignMode.Register);

  return { signMode, handleModeBtn };
}
