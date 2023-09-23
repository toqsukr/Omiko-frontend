import AboutSection from '@components/aboutSection/aboutSection.component';
import AdvantageSection from '@components/advantageSection/advantageSection.component';
import MobileBar from '@components/bar/mobileBar/MobileBar.component';
import Footer from '@components/footer/footer.component';
import HeaderDesktop from '@components/header/headerDesktop/headerDesktop.component';
import HeaderMobile from '@components/header/headerMobile/headerMobile.component';
import SectionContainer from '@components/sectionContainer/sectionContainer.component';
import { MOBILE_SIZE_LARGE } from '@constants/screens';
import RootShowProvider from '@providers/showProviders/unitProviders/RootShowProvider';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import './App.css';

const App: FC = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: MOBILE_SIZE_LARGE });
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
        <Footer />
        {isMobile && <MobileBar />}
      </div>
    </RootShowProvider>
  );
};

export default App;
