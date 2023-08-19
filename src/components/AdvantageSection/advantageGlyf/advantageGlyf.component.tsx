import { FC } from 'react';
import Glyf from '@components/glyf/glyf.component';
import { IAdvantageGlyf } from './advantageGlyf';

import css from './advantageGlyf.module.css';

const AdvantageGlyf: FC<IAdvantageGlyf> = ({ description }) => {
  return (
    <Glyf>
      <div className={css.descriptionContainer}>
        {description.map((el, index) => (
          <div key={index} id={css.textContainer}>
            <p key={index} className={css.description}>
              {el}
            </p>
          </div>
        ))}
      </div>
    </Glyf>
  );
};

export default AdvantageGlyf;
