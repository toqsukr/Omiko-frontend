import { FC } from 'react';
import { ISectionGlyf } from './sectionGlyf';
import Glyf from '../../glyf/glyf.component';
import css from './sectionGlyf.module.css';

const SectionGlyf: FC<ISectionGlyf> = ({ title, description, onClick }) => {
  return (
    <Glyf glyfStyleID={css.sectionGlyf} onClick={onClick}>
      <h1 className={css.title}>{title}</h1>
      <div className={css.descriptionContainer}>
        {description.map((pEl, pIndex) => (
          <p key={pIndex} className={css.description}>
            {pEl}
          </p>
        ))}
        <p className={css.detail}>подробнее</p>
      </div>
    </Glyf>
  );
};

export default SectionGlyf;
