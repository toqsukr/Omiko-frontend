import Wrapper from '@components/ui/wrapper/wrapper.component';
import { IShow } from '@interfaces/show.interface';
import { LocationContext } from '@providers/LocationProvider';
import { locations } from '@utils/data';
import { forwardRef, useContext } from 'react';
import LocationElement from './locationElement/locationElement.component';
import css from './locationWrapper.module.css';

const LocationWrapper = forwardRef<HTMLDivElement, IShow>(({ isShow, setShow }, ref) => {
  const { location, setLocation } = useContext(LocationContext);

  const handleChangeLocation = (index: number) => {
    setShow(false);
    setLocation({
      city: locations[index].city,
      phoneNumbers: locations[index].phoneNumbers,
      description: locations[index].description
    });
  };
  return (
    <Wrapper
      ref={ref}
      isShow={isShow}
      setShow={setShow}
      windowStyleID={css.locationWrapper}
      onMouseLeave={() => setShow(false)}
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
});

export default LocationWrapper;
