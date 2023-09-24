import { useEffect, useState } from 'react';

export const useLockFirstAnimation = () => {
  const [immediate, setImmediate] = useState<boolean>(true);
  useEffect(() => {
    setImmediate(false);
  }, []);
  return { immediate };
};
