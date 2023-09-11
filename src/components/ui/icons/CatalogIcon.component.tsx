import { FC } from 'react';
import { IIcon } from './icon/icon';
import Icon from './icon/icon.component';

const CatalogIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.88003 1.78554C0.706422 2.94225 0.706986 11.2871 1.88003 12.4444C3.05313 13.6017 11.266 13.615 12.4395 12.4444C13.6131 11.2737 13.5016 2.83285 12.4395 1.78554C11.3775 0.738215 2.94273 0.738145 1.88003 1.78554Z"
          stroke="#989898"
        />
        <path
          d="M19.4781 1.78552C18.3045 2.94223 18.3051 11.2871 19.4781 12.4444C20.6512 13.6017 28.8641 13.615 30.0376 12.4444C31.2112 11.2737 31.0997 2.83283 30.0376 1.78552C28.9756 0.738195 20.5408 0.738125 19.4781 1.78552Z"
          stroke="#989898"
        />
        <path
          d="M1.88 19.4681C0.706386 20.6249 0.70695 28.9697 1.88 30.127C3.05309 31.2843 11.266 31.2976 12.4395 30.127C13.613 28.9564 13.5015 20.5155 12.4395 19.4681C11.3774 18.4208 2.94269 18.4208 1.88 19.4681Z"
          stroke="#989898"
        />
        <path
          d="M19.6016 19.4681C18.428 20.6249 18.4286 28.9697 19.6016 30.127C20.7747 31.2843 28.9876 31.2976 30.1611 30.127C31.3347 28.9564 31.2232 20.5155 30.1611 19.4681C29.0991 18.4208 20.6643 18.4208 19.6016 19.4681Z"
          stroke="#989898"
        />
      </svg>
    </Icon>
  );
};

export default CatalogIcon;
