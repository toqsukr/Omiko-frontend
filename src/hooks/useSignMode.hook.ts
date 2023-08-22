import { SignMode } from '@components/sign/sign.d';
import { useState } from 'react';

export function useSignMode() {
  const [signMode, setSignMode] = useState<SignMode>(SignMode.LOGIN);

  const handleModeBtn = () =>
    setSignMode(signMode === SignMode.REGISTER ? SignMode.LOGIN : SignMode.REGISTER);

  return { signMode, handleModeBtn };
}
