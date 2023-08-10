import { useContext } from 'react';
import { locations } from '../../utils/data';
import Wrapper from '../wrapper/wrapper.component';
import LocationElement from './locationElement/locationElement.component';
import { LocationContext } from '../../providers/LocationProvider';

import css from './locationWrapper.module.css';

function LocationWrapper() {
  const { location, setLocation, showWrapper, setShowWrapper } =
    useContext(LocationContext);

  const handleChangeLocation = (i: number) => {
    setShowWrapper(false);
    setLocation({
      city: locations[i].city,
      phoneNumbers: locations[i].phoneNumbers,
      description: locations[i].description,
    });
  };
  return (
    <Wrapper
      windowVisualization={{ isShow: showWrapper, setShow: setShowWrapper }}
      windowStyleID={css.locationWrapper}
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
