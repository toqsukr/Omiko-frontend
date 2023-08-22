import { FC } from 'react';
import { ISectionGlyf } from './sectionGlyf';
import Glyf from '@components/glyf/glyf.component';
import css from './sectionGlyf.module.css';

const SectionGlyf: FC<ISectionGlyf> = ({ title, description, onClick }) => {
  return (
    <Glyf id={css.sectionGlyf} onClick={onClick}>
      <h1 className={css.title}>{title}</h1>
      <div className={css.descriptionContainer}>
        {description.map((el, index) => (
          <p key={index} className={css.description}>
            {el}
          </p>
        ))}
        <p className={css.detail}>подробнее</p>
      </div>
    </Glyf>
  );
};

export default SectionGlyf;
