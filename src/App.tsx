import { useRef, useState } from 'react';
import { sectionGlyfs, advantageGlyfs } from './utils/data';
import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import GlyfContainer from './components/GlyfContainer/GlyfContainer';
import PopularProducts from './components/PopularProducts/PopularProducts';
import DeliverySection from './components/DeliverySection/DeliverySection';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const advantageRef = useRef(null);
  return (
    <>
      <LocationProvider>
        <Header scrolledDown={scrolledDown} />
        <div id='bodyContainer'>
          <GlyfContainer type='sections' glyfs={sectionGlyfs} />
          <PopularProducts />
          <GlyfContainer
            type='advantages'
            title='Преимущества'
            glyfs={advantageGlyfs}
          />
          <DeliverySection />
          <Footer />
        </div>
      </LocationProvider>
    </>
  );
}
