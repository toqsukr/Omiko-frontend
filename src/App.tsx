import { useState } from 'react';
import { sectionGlyfs, advantageGlyfs } from './utils/data';
import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import GlyfContainer from './components/GlyfContainer/GlyfContainer';
import PopularProducts from './components/PopularProducts/PopularProducts';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [scrolledDown, setScrolledDown] = useState(false);
  return (
    <>
      <LocationProvider>
        <Header scrolledDown={scrolledDown} />
        <div id='bodyContainer'>
          <GlyfContainer key='sections' glyfs={sectionGlyfs} />
          <PopularProducts />
          <GlyfContainer key='advantages' glyfs={advantageGlyfs} />
          <Footer />
        </div>
      </LocationProvider>
    </>
  );
}
