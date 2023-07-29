import { useState } from 'react';
import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import GlyfContainer from './components/GlyfContainer/GlyfContainer';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import { products } from './utils/data';
import './App.css';

export default function App() {
  const [scrolledDown, setScrolledDown] = useState(false);
  return (
    <>
      <LocationProvider>
        <Header scrolledDown={scrolledDown} />
        <GlyfContainer />
        <Card
          url={products[0].url}
          price={products[0].price}
          title={products[0].title}
        />
        <Footer />
      </LocationProvider>
    </>
  );
}
