import { ReactNode } from 'react';
import classnames from 'classnames';
import Glyf from '../Glyf/Glyf';
import { IGlyf } from '../Glyf/Glyf';
import css from './GlyfContainer.module.css';

interface IGlyfContainer {
  children?: ReactNode;
  key: string;
  glyfs: IGlyf[];
  background?: string;
}

export default function GlyfContainer({ key, glyfs }: IGlyfContainer) {
  return (
    <div
      className={classnames({
        [css.sectionContainer]: key === 'sections',
        [css.advantageContainer]: key === 'advantages',
      })}
    >
      {glyfs.map((el, index: number) => (
        <Glyf key={index} title={el.title} description={el.description} />
      ))}
    </div>
  );
}
