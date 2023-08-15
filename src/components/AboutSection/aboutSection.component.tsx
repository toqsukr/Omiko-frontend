import { FC } from 'react';
import { aboutInfo } from '@utils/data';

import css from './AboutSection.module.css';

const AboutSection: FC = () => {
  return (
    <div className={css.aboutContainer}>
      <div className={css.titleContainer}>
        <h1 id={css.title}>О НАС</h1>
      </div>
      <div className={css.aboutInnerContainer}>
        <div className={css.contactContainer}>
          <div className={css.contactTextContainer}>
            {aboutInfo.contact.map((el, index) => (
              <p key={index} id={css.contact}>
                {el}
              </p>
            ))}
          </div>
        </div>
        <iframe
          id={css.map}
          src='https://yandex.ru/map-widget/v1/?from=mapframe&ll=30.360769%2C60.061988&mode=usermaps&source=mapframe&um=constructor%3Ae3419638af8c4855e7960a3838a18977b385e2d404b841d1d26d11fa1e0aba81&utm_source=mapframe&z=17'
        />
      </div>
    </div>
  );
};

export default AboutSection;
