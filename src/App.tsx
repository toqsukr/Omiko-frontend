import { useState } from 'react';
import { Element } from 'react-scroll';
import LocationProvider from './providers/LocationProvider';
import LoginProvider from './providers/LoginProvider';
import Header from './components/Header/Header';
import PopularProducts from './components/PopularProducts/PopularProducts';
import DeliverySection from './components/DeliverySection/DeliverySection';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import './App.css';
import SectionContainer from './components/SectionContainer/SectionContainer';
import AdvantageSection from './components/AdvantageSection/AdvantageSection';

export default function App() {
  const [deliveryDetail, setDeliveryDetail] = useState(false);
  const [sign, setSign] = useState(false);
  return (
    <>
      <LocationProvider>
        <LoginProvider>
          <Header sign={sign} setSign={setSign} />
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
}
