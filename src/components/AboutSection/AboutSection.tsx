import { aboutInfo } from '../../utils/data';
import css from './AboutSection.module.css';

export default function AboutSection() {
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
        <img src='address/map_spb.png' id={css.map} />
      </div>
      <div className={css.manufactureContainer}>
        <p id={css.manufactureText}>{aboutInfo.manufacture}</p>
      </div>
    </div>
  );
}
