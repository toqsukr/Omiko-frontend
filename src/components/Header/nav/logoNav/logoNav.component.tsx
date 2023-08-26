import LogoIcon from '@components/ui/icons/LogoIcon.component';
import { FC } from 'react';
import { scroller } from 'react-scroll';
import { categories } from '../nav.data';
import css from './LogoNav.module.css';
import { topScrollAnimation } from './logoNav.animation';

const LogoNav: FC = () => {
  return (
    <div className={css.iconInnerContainer}>
      {
        <div className={css.catigoryContainer} id={css.left}>
          {categories.map((el: string, index: number) => {
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
      <LogoIcon type="button" id={css.logo} onClick={() => scroller.scrollTo('top', topScrollAnimation)} />
      <div className={css.catigoryContainer} id={css.right}>
        {categories.map((el: string, index: number) => {
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
