import { useState, createContext, FC, PropsWithChildren } from 'react';

export const LocationShowContext = createContext({
  showWrapper: false,
  setShowWrapper: (value: boolean) => {
    value;
  },
});

const LocationShowProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showWrapper, setShowWrapper] = useState(false);
  return (
    <LocationShowContext.Provider value={{ showWrapper, setShowWrapper }}>
      {children}
    </LocationShowContext.Provider>
  );
};

export default LocationShowProvider;
