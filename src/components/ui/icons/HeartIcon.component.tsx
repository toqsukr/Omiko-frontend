import { FC } from 'react';
import { IIcon } from './icon/icon';
import Icon from './icon/icon.component';

const HeartIcon: FC<IIcon> = ({ fillOpacity, strokeOpacity, ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="52"
        height="47"
        viewBox="0 0 52 47"
        fill="#ff0000"
        fillOpacity={fillOpacity}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.6276 29.3813C38.2531 35.8144 27.1952 46 26.2062 46C25.2171 46 14.3471 36.356 7.44296 29.3813C0.538867 22.4067 0.897589 16.5153 1.06598 13.8348C1.32841 9.66875 3.80932 4.51819 9.13021 2.21677C20.2856 -2.60821 25.2171 8.47392 26.2062 8.47392C27.1952 8.47392 30.8141 -1.89063 43.0319 2.21677C47.8128 3.82402 51 9.54609 51 13.8348V13.838C51 17.0551 51 22.9504 44.6276 29.3813Z"
          stroke="black"
          strokeOpacity={strokeOpacity}
          strokeWidth="2"
        />
      </svg>
    </Icon>
  );
};

export default HeartIcon;
