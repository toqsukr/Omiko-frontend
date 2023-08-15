import { FC } from 'react';
import { Element } from 'react-scroll';
import Header from '@components/header/header.component';
import PopularProducts from '@components/popularProducts/popularProducts.component';
import DeliverySection from '@components/deliverySection/deliverySection.component';
import Footer from '@components/footer/footer.component';
import AboutSection from '@components/aboutSection/aboutSection.component';
import SectionContainer from '@components/sectionContainer/sectionContainer.component';
import AdvantageSection from '@components/advantageSection/advantageSection.component';
import LocationProvider from '@providers/LocationProvider';
import RootShowProvider from '@providers/showProviders/unitProviders/RootShowProvider';
import './App.css';

const App: FC = () => {
  return (
    <>
      <RootShowProvider>
        <LocationProvider>
          <Header />
          <div id='bodyContainer'>
            <Element name='top'>
              <SectionContainer />
            </Element>
            <PopularProducts />
            <Element name='delivery'>
              <DeliverySection />
            </Element>
            <Element name='advantage'>
              <AdvantageSection />
            </Element>
            <Element name='about'>
              <AboutSection />
            </Element>
            <Footer />
          </div>
        </LocationProvider>
      </RootShowProvider>
    </>
  );
};

export default App;
