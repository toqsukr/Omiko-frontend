import { FC } from 'react';
import Icon from './icon/icon.component';
import { IIcon } from './icon/icon';

const ConvertorArrowIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="23"
        height="96"
        viewBox="0 0 23 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.5 94V66.4646H2L11.5 94Z" fill="#D9D9D9" />
        <path d="M11.5 94L21 66.4646H11.5V94Z" fill="#D9D9D9" />
        <path
          d="M11.5 0V66.4646M11.5 94L2 66.4646H11.5M11.5 94L21 66.4646H11.5M11.5 94V66.4646"
          stroke="#D9D9D9"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default ConvertorArrowIcon;
