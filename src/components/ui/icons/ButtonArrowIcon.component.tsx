import { FC } from 'react';
import Icon from './icon/icon.component';
import { IIcon } from './icon/icon';

const ButtonArrowIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="34"
        height="45"
        viewBox="0 0 34 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.7383 29.5L13.7522 19.5H33.2251L23.7383 29.5Z" fill="#787878" />
        <path
          d="M1.26953 0V45M23.7383 29.5L13.7522 19.5H33.2251L23.7383 29.5Z"
          stroke="black"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default ButtonArrowIcon;
