import { FC } from 'react';
import BarLayout from '../BarLayout.component';
import BarLayoutElement from '../barLayoutElement/BarLayoutElement.component';

const ProfileBarLayout: FC = () => {
  return (
    <BarLayout>
      <BarLayoutElement>Личные данные</BarLayoutElement>
      <BarLayoutElement>История заказов</BarLayoutElement>
      <BarLayoutElement>Избранное</BarLayoutElement>
      <BarLayoutElement>Выйти</BarLayoutElement>
    </BarLayout>
  );
};

export default ProfileBarLayout;
