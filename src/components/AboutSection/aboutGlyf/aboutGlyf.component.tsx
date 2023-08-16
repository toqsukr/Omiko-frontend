import { FC, PropsWithChildren } from 'react';
import css from './aboutGlyf.module.css';
import { IStaticGlyf } from '@components/glyf/glyf';

const AboutGlyf: FC<PropsWithChildren<IStaticGlyf>> = ({ glyfStyleID, children }) => {
  return (
    <div className={css.aboutGlyfContainer} id={glyfStyleID}>
      {children}
    </div>
  );
};

export default AboutGlyf;
