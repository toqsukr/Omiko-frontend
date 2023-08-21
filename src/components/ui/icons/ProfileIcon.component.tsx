import { FC } from 'react';
import Icon from './icon/icon.component';
import { IIcon } from './icon/icon';

const ProfileIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="25"
        height="32"
        viewBox="0 0 25 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8289 1.5C9.82831 1.5 8.32831 2.5 7.32831 3.5C6.32831 4.5 5.32946 6.4998 5.32888 8.4999C5.32831 10.5 6.32831 12 7.32831 13C8.32831 14 9.82945 14.9998 11.8289 14.9999C13.8283 15 15.8283 14 16.8283 13C17.8283 12 18.8283 10.4998 18.8283 8.4999C18.8283 6.5 17.8289 4.5 16.8283 3.49999C15.8277 2.49997 13.8294 1.5 11.8289 1.5Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8289 18.5001C7.82941 18.5001 7.32831 16.5003 5.82831 16.5002C4.32831 16.5001 2.82936 18.5 1.82888 20.5001C0.828403 22.5002 0.828154 27.5002 1.32888 28.5001C1.82961 29.5 3.32888 31.0001 5.32888 31.0001H19.3289C21.3294 31.0001 22.8296 29.5 23.3289 28.5001C23.8281 27.5002 23.8814 22.8574 22.8289 20.5001C21.8572 18.3237 19.8283 16.5002 18.3283 16.5002C16.8283 16.5002 15.8284 18.5001 11.8289 18.5001Z"
          stroke="black"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default ProfileIcon;
