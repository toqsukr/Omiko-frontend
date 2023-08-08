import { useState, createContext, FC, PropsWithChildren } from 'react';
import { locations } from '../utils/data';

export interface ILocation {
  city: string;
  phoneNumbers: string[];
  description: string;
}

export const LocationContext = createContext({
  location: { city: '', phoneNumbers: [''], description: '' },
  setLocation: (value: ILocation) => {
    value;
  },
  isHide: true,
  setIsHide: (value: boolean) => {
    value;
  },
});

const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [location, setLocation] = useState(locations[0]);
  const [isHide, setIsHide] = useState(true);
  return (
    <LocationContext.Provider
      value={{ location, setLocation, isHide, setIsHide }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
