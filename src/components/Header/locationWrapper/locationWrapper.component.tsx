import { useContext } from 'react';
import Wrapper from '@components/wrapper/wrapper.component';
import LocationElement from './locationElement/locationElement.component';
import { locations } from '@utils/data';
import { LocationContext } from '@providers/LocationProvider';
import { LocationShowContext } from '@providers/showProviders/LocationShowProvider';
import css from './locationWrapper.module.css';

function LocationWrapper() {
  const { location, setLocation } = useContext(LocationContext);
  const { showWrapper, setShowWrapper } = useContext(LocationShowContext);

  const handleChangeLocation = (index: number) => {
    setShowWrapper(false);
    setLocation({
      city: locations[index].city,
      phoneNumbers: locations[index].phoneNumbers,
      description: locations[index].description
    });
  };
  return (
    <Wrapper
      isShow={showWrapper}
      setShow={setShowWrapper}
      windowStyleID={css.locationWrapper}
      onMouseLeave={() => setShowWrapper(false)}
    >
      <>
        {locations.map(
          (el, i: number) =>
            el.city === location.city || (
              <LocationElement key={i} onClick={() => handleChangeLocation(i)}>
                {el.city}
              </LocationElement>
            )
        )}
      </>
    </Wrapper>
  );
}

export default LocationWrapper;
