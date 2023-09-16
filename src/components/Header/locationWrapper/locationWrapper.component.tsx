import Wrapper from '@components/ui/wrapper/wrapper.component';
import { useActions } from '@hooks/useActions.hook';
import { useLocation } from '@hooks/useLocation';
import { IShow } from '@interfaces/show.interface';
import { forwardRef } from 'react';
import { locations } from '../location/location.data';
import LocationElement from './locationElement/locationElement.component';
import css from './locationWrapper.module.css';

const LocationWrapper = forwardRef<HTMLDivElement, IShow>(({ isShow, setShow }, ref) => {
  const { location } = useLocation();
  const { changeLocation } = useActions();

  const handleChangeLocation = (index: number) => {
    setShow(false);
    changeLocation({
      city: locations[index].city,
      phoneNumbers: locations[index].phoneNumbers,
      description: locations[index].description
    });
  };
  return (
    <Wrapper ref={ref} isShow={isShow} setShow={setShow} windowStyleID={css.locationWrapper}>
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
