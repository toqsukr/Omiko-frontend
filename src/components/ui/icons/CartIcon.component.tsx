import { FC } from 'react';
import Icon from './icon/icon.component';
import { IIcon } from './icon/icon';

const CartIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="51"
        height="37"
        viewBox="0 0 51 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.8929 3.13796C46.244 1.4859 44.6188 0.821856 42.2937 1.04038C40.0998 1.24659 38.7582 2.10788 37.3945 3.83715C36.031 5.56625 35.3347 7.13539 35.8196 9.24964C36.7563 12.3038 37.7342 13.4293 40.1941 14.325C42.8129 15.2787 45.0216 14.6726 47.193 12.9266C48.9097 11.5463 49.898 10.2317 49.9926 8.03229C50.082 5.95472 49.3626 4.61053 47.8929 3.13796Z"
          fill="#FF0000"
        />
        <path
          d="M1 2.43882H7.78359L9.18021 9.24964M9.18021 9.24964L13.0597 28.1686H14.5672M9.18021 9.24964H21.6915H27.9472H35.8196M17.5821 28.1686H14.5672M17.5821 28.1686C18.8766 28.9124 19.3891 29.4026 19.8433 30.4389C20.2604 31.6796 20.2978 32.3482 19.8433 33.4659C19.2582 34.7113 18.7802 35.1981 17.5821 35.7362C16.3912 36.0902 15.7285 36.0857 14.5672 35.7362C13.3986 35.1678 12.9088 34.6638 12.306 33.4659C11.8513 32.2824 11.8333 31.6221 12.306 30.4389C12.7823 29.238 13.2965 28.7265 14.5672 28.1686M17.5821 28.1686H32.6567M32.6567 28.1686H35.6717M32.6567 28.1686C31.4946 28.8014 30.9926 29.2917 30.3955 30.4389C29.9944 31.6703 29.9588 32.3383 30.3955 33.4659C30.9076 34.5847 31.3931 35.0882 32.6567 35.7362C33.8018 36.0444 34.4619 36.044 35.6717 35.7362C36.7839 35.2243 37.2721 34.7161 37.9329 33.4659C38.3698 32.3663 38.3263 31.6944 37.9329 30.4389C37.3948 29.2984 36.8855 28.8114 35.6717 28.1686M35.6717 28.1686H37.1791L38.3948 21.4556L40.1941 14.325M25.1194 11.5199V16.0605M25.1194 25.1416V21.3578M17.5821 11.5199L18.3358 16.0605M19.8433 25.1416L19.2152 21.3578M30.3955 25.1416L30.8143 21.3578M31.903 11.5199L31.4005 16.0605M13.0597 16.0605H18.3358M36.4254 16.0605H31.4005M14.5672 21.3578H19.2152M34.9179 21.3578H30.8143M19.2152 21.3578L18.3358 16.0605M19.2152 21.3578H25.1194M18.3358 16.0605H25.1194M25.1194 16.0605H31.4005M25.1194 16.0605V21.3578M31.4005 16.0605L30.8143 21.3578M30.8143 21.3578H25.1194M35.8196 9.24964C35.3347 7.13539 36.031 5.56625 37.3945 3.83715C38.7582 2.10788 40.0998 1.24659 42.2937 1.04038C44.6188 0.821856 46.244 1.4859 47.8929 3.13796C49.3626 4.61053 50.082 5.95472 49.9926 8.03229C49.898 10.2317 48.9097 11.5463 47.193 12.9266C45.0216 14.6726 42.8129 15.2787 40.1941 14.325M35.8196 9.24964C36.7563 12.3038 37.7342 13.4293 40.1941 14.325"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default CartIcon;
