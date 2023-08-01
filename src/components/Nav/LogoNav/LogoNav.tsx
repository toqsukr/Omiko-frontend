import { ReactSVG } from 'react-svg';
import { useContext } from 'react';
import { LocationContext } from '../../../providers/LocationProvider';
import css from './LogoNav.module.css';
import { catigories } from '../../../utils/data';

export default function LogoNav() {
  const { setIsHide } = useContext(LocationContext);
  return (
    <div
      onMouseEnter={() => setIsHide(true)}
      className={css.iconInnerContainer}
    >
      <div className={css.catigoryContainer} id={css.left}>
        {catigories.map((el: string, index: number) => {
          if (index < 3)
            return (
              <p id={css.catigoryText} key={index}>
                {el}
              </p>
            );
          else return null;
        })}
      </div>
      <ReactSVG id={css.logo} src='icons/fullicon.svg'></ReactSVG>
      <div className={css.catigoryContainer} id={css.right}>
        {catigories.map((el: string, index: number) => {
          if (index >= 3)
            return (
              <p id={css.catigoryText} key={index}>
                {el}
              </p>
            );
          else return null;
        })}
      </div>
    </div>
  );
}
