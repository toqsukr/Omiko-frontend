import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

import css from './GlyfContainer.module.css';

interface IGlyfContainer {
  style: string;
}

const GlyfContainer: FC<PropsWithChildren<IGlyfContainer>> = ({
  children,
  style,
}) => {
  return (
    <section
      className={classnames({ [css.mainContainer]: true, [style]: style })}
    >
      {children}
    </section>
  );
};

export default GlyfContainer;
