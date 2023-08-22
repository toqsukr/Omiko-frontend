import { IGlyf } from '@components/glyf/glyf';
import { FC, PropsWithChildren } from 'react';
import css from './aboutGlyf.module.css';

const AboutGlyf: FC<PropsWithChildren<IGlyf>> = ({ id, children }) => {
  return (
    <div className={css.aboutGlyfContainer} id={id}>
      {children}
    </div>
  );
};

export default AboutGlyf;
