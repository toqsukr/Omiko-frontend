import { useContext, FC } from 'react';
import { ReactSVG } from 'react-svg';
import { scroller } from 'react-scroll';
import { LocationContext } from '../../../providers/LocationProvider';
import { catigories } from '../../../utils/data';

import css from './LogoNav.module.css';

const LogoNav: FC = () => {
  const { setShowWrapper } = useContext(LocationContext);
  return (
    <div
      onMouseEnter={() => setShowWrapper(false)}
      className={css.iconInnerContainer}
    >
      {
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
      }
      <ReactSVG
        type='button'
        id={css.logo}
        src='icons/fulllogo.svg'
        onClick={() =>
          scroller.scrollTo('top', {
            offset: -124,
            duration: 1200,
            smooth: 'easeInOutQuart',
          })
        }
      ></ReactSVG>
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
};

export default LogoNav;
