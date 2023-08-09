import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import GlyfContainer from '../glyfContainer/glyfContainer.component';
import Glyf from '../glyf/glyf.component';
import { advantageGlyfs } from '../../utils/data';

import css from './AdvantageSection.module.css';

const AdvantageSection: FC = () => {
  return (
    <GlyfContainer style={css.advantage}>
      <div className={css.titleContainer}>
        <h1 id={css.titleText}>Преимущества</h1>
      </div>
      <div className={css.glyfContainer}>
        {advantageGlyfs.map((gEl, gIndex: number) => (
          <Glyf key={gIndex}>
            <div className={css.descriptionContainer}>
              {gEl.description.map((pEl, pIndex) => (
                <div key={pIndex} id={css.textContainer}>
                  {gIndex === 1 && (
                    <div className={css.plusContainer}>
                      <ReactSVG src='icons/plus.svg' />
                    </div>
                  )}
                  <p key={pIndex} className={css.description}>
                    {pEl}
                  </p>
                </div>
              ))}
            </div>
          </Glyf>
        ))}
      </div>
    </GlyfContainer>
  );
};

export default AdvantageSection;
