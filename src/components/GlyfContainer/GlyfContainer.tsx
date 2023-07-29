import { glyfs } from '../../utils/data';
import Glyf from '../Glyf/Glyf';
import css from './GlyfContainer.module.css';

export default function GlyfContainer() {
  return (
    <div className={css.glyfContainer}>
      {glyfs.map((el, index: number) => {
        return (
          <Glyf key={index}>
            <h1 className={css.title}>{el.title}</h1>
            <div className={css.descriptionContainer}>
              <p className={css.description}>{el.description}</p>
            </div>
          </Glyf>
        );
      })}
    </div>
  );
}
