import Sign from '@components/sign/sign.component';
import CatalogIcon from '@components/ui/icons/CatalogIcon.component';
import HomeIcon from '@components/ui/icons/HomeIcon.component';
import LocationIcon from '@components/ui/icons/LocationIcon.component';
import ProfileIcon from '@components/ui/icons/ProfileIcon.component';
import SignIcon from '@components/ui/icons/SignIcon.component';
import { useAuth } from '@hooks/useAuth.hook';
import { SignShowContext } from '@providers/showProviders/SignShowProvider';
import { FC, useContext } from 'react';
import css from './MobileBar.module.css';

const MobileBar: FC = () => {
  const { user } = useAuth();
  const { sign, setSign } = useContext(SignShowContext);

  return (
    <>
      <div id={css.barContainer}>
        <div className={css.iconContainer}>
          <HomeIcon />
        </div>
        <div className={css.iconContainer}>
          <CatalogIcon />
        </div>
        <div className={css.iconContainer}>
          <LocationIcon id={css.locationIcon} />
        </div>
        <div
          onClick={() => {
            !sign && setSign(true);
          }}
          className={css.iconContainer}
        >
          {!!user ? <ProfileIcon id={css.profileIcon} /> : <SignIcon id={css.signIcon} />}
        </div>
      </div>
      <Sign isShow={sign} setShow={setSign} />
    </>
  );
};

export default MobileBar;
