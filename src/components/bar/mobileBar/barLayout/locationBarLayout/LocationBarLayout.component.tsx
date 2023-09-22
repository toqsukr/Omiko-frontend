import { FC } from 'react';
import BarLayout from '../BarLayout.component';
import BarLayoutElement from '../barLayoutElement/BarLayoutElement.component';

const LocationBarLayout: FC = () => {
  return (
    <BarLayout>
      <BarLayoutElement>Москва</BarLayoutElement>
      <BarLayoutElement>Краснодар</BarLayoutElement>
      <BarLayoutElement>Сочи</BarLayoutElement>
      <BarLayoutElement>Екатеринбург</BarLayoutElement>
      <BarLayoutElement>Тюмень</BarLayoutElement>
      <BarLayoutElement>Другое</BarLayoutElement>
    </BarLayout>
  );
};

export default LocationBarLayout;
