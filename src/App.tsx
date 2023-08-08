import { useState, FC } from 'react';
import { Element } from 'react-scroll';
import LocationProvider from './providers/LocationProvider';
import LoginProvider from './providers/LoginProvider';
import Header from './components/header/header.component';
import PopularProducts from './components/popularProducts/popularProducts.component';
import DeliverySection from './components/deliverySection/deliverySection.component';
import Footer from './components/footer/footer.component';
import AboutSection from './components/aboutSection/aboutSection.component';
import './App.css';
import SectionContainer from './components/sectionContainer/sectionContainer.component';
import AdvantageSection from './components/advantageSection/advantageSection.component';

const App: FC = () => {
  const [deliveryDetail, setDeliveryDetail] = useState(false);
  const [sign, setSign] = useState(false);
  return (
    <>
      <LocationProvider>
        <LoginProvider>
          <Header isShow={sign} setShow={setSign} />
          <div id='bodyContainer'>
            <Element name='top'>
              <SectionContainer />
            </Element>
            <PopularProducts />
            <Element name='delivery'>
              <DeliverySection
                isShow={deliveryDetail}
                setShow={setDeliveryDetail}
              />
            </Element>
            <Element name='advantage'>
              <AdvantageSection />
            </Element>
            <Element name='about'>
              <AboutSection />
            </Element>
            <Footer />
          </div>
        </LoginProvider>
      </LocationProvider>
    </>
  );
};

export default App;
