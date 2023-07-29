import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import GlyfContainer from './components/GlyfContainer/GlyfContainer';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <LocationProvider>
        <Header />
        <GlyfContainer />
        <Footer />
      </LocationProvider>
    </>
  );
}
