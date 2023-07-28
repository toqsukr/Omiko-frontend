import { useState, createContext, ReactNode } from 'react';
import { locations } from '../utils/data';

export const LocationContext = createContext({
  currentCity: '',
  setCurrentCity: (value: string) => {
    value;
  },
  isHide: true,
  setIsHide: (value: boolean) => {
    value;
  },
});
interface Props {
  children?: ReactNode;
}

export default function LocationProvider({ children }: Props) {
  const [currentCity, setCurrentCity] = useState(locations[0]);
  const [isHide, setIsHide] = useState(true);
  return (
    <LocationContext.Provider
      value={{ currentCity, setCurrentCity, isHide, setIsHide }}
    >
      {children}
    </LocationContext.Provider>
  );
}
