import { useState } from 'react';
import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import PopularProducts from './components/PopularProducts/PopularProducts';
import DeliverySection from './components/DeliverySection/DeliverySection';
import Footer from './components/Footer/Footer';
import './App.css';
import SectionContainer from './components/SectionContainer/SectionContainer';
import AdvantageContainer from './components/AdvantageContainer/AdvantageContainer';

export default function App() {
  // const [scrolledDown, setScrolledDown] = useState(false);
  // const advantageRef = useRef(null);
  const [deliveryDetail, setDeliveryDetail] = useState(false);
  return (
    <>
      <LocationProvider>
        <Header />
        <div id='bodyContainer'>
          <SectionContainer />
          <PopularProducts />
          <DeliverySection
            isShow={deliveryDetail}
            setShow={setDeliveryDetail}
          />
          <AdvantageContainer />
          <Footer />
        </div>
      </LocationProvider>
    </>
  );
}
