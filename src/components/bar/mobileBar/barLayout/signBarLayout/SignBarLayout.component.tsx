import Sign from '@components/sign/sign.component';
import { useAuthEffect } from '@hooks/useAuthEffect.hook';
import { FC } from 'react';
import BarLayout from '../BarLayout.component';

const SignBarLayout: FC = () => {
  useAuthEffect();
  return (
    <BarLayout>
      <Sign />
    </BarLayout>
  );
};

export default SignBarLayout;
