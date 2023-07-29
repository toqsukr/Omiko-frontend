import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import Glyf from './components/Glyf/Glyf';
import './App.css';

export default function App() {
  return (
    <>
      <LocationProvider>
        <Header />
      </LocationProvider>
      <div className='glyfContainer'>
        <Glyf></Glyf>
        <Glyf></Glyf>
        <Glyf></Glyf>
      </div>
    </>
  );
}
