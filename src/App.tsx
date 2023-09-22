import AboutSection from '@components/aboutSection/aboutSection.component';
import AdvantageSection from '@components/advantageSection/advantageSection.component';
import MobileBar from '@components/bar/mobileBar/MobileBar.component';
import CatalogBarLayout from '@components/bar/mobileBar/barLayout/catalogBarLayout/CatalogBarLayout.component';
import LocationBarLayout from '@components/bar/mobileBar/barLayout/locationBarLayout/LocationBarLayout.component';
import ProfileBarLayout from '@components/bar/mobileBar/barLayout/profileBarLayout/profileBarLayout.component';
import Footer from '@components/footer/footer.component';
import HeaderDesktop from '@components/header/headerDesktop/headerDesktop.component';
import HeaderMobile from '@components/header/headerMobile/headerMobile.component';
import SectionContainer from '@components/sectionContainer/sectionContainer.component';
import { MOBILE_SIZE_LARGE } from '@constants/screens';
import { useBarState } from '@hooks/useBarState.hook';
import RootShowProvider from '@providers/showProviders/unitProviders/RootShowProvider';
import { MobileBarState } from '@store/mobileBar/mobileBar.interface';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import './App.css';

const App: FC = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: MOBILE_SIZE_LARGE });
  const { mobileBarState } = useBarState();
  return (
    <RootShowProvider>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <div id="bodyContainer">
        <Element name="top">
          <SectionContainer />
        </Element>
        {/* <PopularProducts />
            <Element name="delivery">
              <DeliverySection />
            </Element> */}
        <Element name="advantage">
          <AdvantageSection />
        </Element>
        <Element name="about">
          <AboutSection />
        </Element>
        {mobileBarState.barState === MobileBarState.LOCATION && <LocationBarLayout />}
        {mobileBarState.barState === MobileBarState.CATALOG && <CatalogBarLayout />}
        {mobileBarState.barState === MobileBarState.PROFILE && <ProfileBarLayout />}
        <Footer />
        {isMobile && <MobileBar />}
      </div>
    </RootShowProvider>
  );
};

export default App;
