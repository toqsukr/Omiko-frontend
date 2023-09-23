import CatalogIcon from '@components/ui/icons/CatalogIcon.component';
import HomeIcon from '@components/ui/icons/HomeIcon.component';
import LocationIcon from '@components/ui/icons/LocationIcon.component';
import ProfileIcon from '@components/ui/icons/ProfileIcon.component';
import { useActions } from '@hooks/useActions.hook';
import { useAuth } from '@hooks/useAuth.hook';
import { useBarState } from '@hooks/useBarState.hook';
import { MobileBarState } from '@store/mobileBar/mobileBar.interface';
import { FC } from 'react';
import css from './MobileBar.module.css';
import CatalogBarLayout from './barLayout/catalogBarLayout/CatalogBarLayout.component';
import LocationBarLayout from './barLayout/locationBarLayout/LocationBarLayout.component';
import ProfileBarLayout from './barLayout/profileBarLayout/ProfileBarLayout.component';
import SignBarLayout from './barLayout/signBarLayout/SignBarLayout.component';

const MobileBar: FC = () => {
  const { user } = useAuth();
  const { mobileBarState } = useBarState();
  const { changeBarState } = useActions();

  return (
    <>
      <div id={css.barContainer}>
        <div className={css.iconContainer} onClick={() => changeBarState(MobileBarState.HOME)}>
          <HomeIcon filled={mobileBarState.barState === MobileBarState.HOME} />
        </div>
        <div className={css.iconContainer} onClick={() => changeBarState(MobileBarState.CATALOG)}>
          <CatalogIcon filled={mobileBarState.barState === MobileBarState.CATALOG} />
        </div>
        <div className={css.iconContainer} onClick={() => changeBarState(MobileBarState.LOCATION)}>
          <LocationIcon
            colored={false}
            filled={mobileBarState.barState === MobileBarState.LOCATION}
            id={css.locationIcon}
          />
        </div>
        <div
          className={css.iconContainer}
          onClick={() =>
            !!user ? changeBarState(MobileBarState.PROFILE) : changeBarState(MobileBarState.SIGN)
          }
        >
          <ProfileIcon
            colored={false}
            filled={
              mobileBarState.barState === MobileBarState.PROFILE ||
              mobileBarState.barState === MobileBarState.SIGN
            }
            id={css.profileIcon}
          />
        </div>
      </div>
      {mobileBarState.barState === MobileBarState.LOCATION && <LocationBarLayout />}
      {mobileBarState.barState === MobileBarState.CATALOG && <CatalogBarLayout />}
      {mobileBarState.barState === MobileBarState.PROFILE && <ProfileBarLayout />}
      {mobileBarState.barState === MobileBarState.SIGN && <SignBarLayout />}
    </>
  );
};

export default MobileBar;
