import { useState, FC, PropsWithChildren, createContext } from 'react';
import type { ILocation } from '@interfaces/location.interface';
import { locations } from '@utils/data';

export const LocationContext = createContext({
  location: { city: '', phoneNumbers: [''], description: '' },
  setLocation: (value: ILocation) => {
    value;
  }
});

const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [location, setLocation] = useState(locations[0]);
  return <LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>;
};

export default LocationProvider;
