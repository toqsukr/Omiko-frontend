import { FC } from 'react';
import BarLayout from '../BarLayout.component';
import LocationBarElement from './locationBarElement/LocationBarElement.component';

const LocationBarLayout: FC = () => {
  return (
    <BarLayout>
      <LocationBarElement>Москва</LocationBarElement>
      <LocationBarElement>Краснодар</LocationBarElement>
      <LocationBarElement>Сочи</LocationBarElement>
      <LocationBarElement>Екатеринбург</LocationBarElement>
      <LocationBarElement>Тюмень</LocationBarElement>
      <LocationBarElement>Другое</LocationBarElement>
    </BarLayout>
  );
};

export default LocationBarLayout;
