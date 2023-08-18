import { useState } from 'react';
import { SignMode } from '@components/sign/sign.d';

export function useSignMode() {
  const [signMode, setSignMode] = useState(SignMode.Enter);

  const handleModeBtn = () =>
    setSignMode(signMode === SignMode.Register ? SignMode.Enter : SignMode.Register);

  return { signMode, handleModeBtn };
}
