import { useState, createContext, FC, PropsWithChildren } from 'react';

export const DeliveryDetailShowContext = createContext({
  showDetail: false,
  setShowDetail: (value: boolean) => {
    value;
  },
});

const DeliveryDetailShowProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <DeliveryDetailShowContext.Provider value={{ showDetail, setShowDetail }}>
      {children}
    </DeliveryDetailShowContext.Provider>
  );
};

export default DeliveryDetailShowProvider;
