import { MutableRefObject, ReactNode } from 'react';
import classnames from 'classnames';
import Glyf from '../Glyf/Glyf';
import { IGlyf } from '../Glyf/Glyf';
import css from './GlyfContainer.module.css';

interface IGlyfContainer {
  children?: ReactNode;
  type: string;
  title?: string;
  glyfs: IGlyf[];
  background?: string;
}

export default function GlyfContainer({ type, title, glyfs }: IGlyfContainer) {
  return (
    <div
      className={classnames({
        [css.mainContainer]: true,
        [css.section]: type === 'sections',
        [css.advantage]: type === 'advantages',
      })}
    >
      {title && (
        <div className={css.titleContainer}>
          <h1 id={css.titleText}>{title}</h1>
        </div>
      )}
      <div
        className={classnames({
          [css.glyfContainer]: true,
          [css.sectionContainer]: type === 'sections',
          [css.advantageContainer]: type === 'advantages',
        })}
      >
        {glyfs.map((el, index: number) => (
          <Glyf key={index} title={el.title} description={el.description} />
        ))}
      </div>
    </div>
  );
}
