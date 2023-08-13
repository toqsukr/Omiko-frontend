import { useState, createContext, FC, PropsWithChildren } from 'react';

export const ProfileContext = createContext({
  showProfile: false,
  setShowProfile: (value: boolean) => {
    value;
  },
});

const ProfileProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <ProfileContext.Provider value={{ showProfile, setShowProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
