import LocationProvider from './providers/LocationProvider';
import Header from './components/Header/Header';
import './App.css';

export default function App() {
  return (
    <>
      <LocationProvider>
        <Header />
      </LocationProvider>
      <div></div>
    </>
  );
}
