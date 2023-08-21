import { FC } from 'react';
import { IIcon } from './icon/icon';

const CloseIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <svg {...props} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.38596 2L12.9432 12.7458M24 24L12.9432 12.7458M23.2281 2.39286L12.9432 12.7458M12.9432 12.7458L2 24"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};

export default CloseIcon;
