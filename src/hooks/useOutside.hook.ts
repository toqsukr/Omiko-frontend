import { IShow } from '@interfaces/show.interface';
import { useEffect, useRef, useState } from 'react';

interface TypeOut extends IShow {
  ref: any;
}

export const useOutside = (initialIsVisible: boolean): TypeOut => {
  const [isShow, setShow] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isShow, setShow };
};
