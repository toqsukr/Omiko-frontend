import { FC } from 'react';
import classnames from 'classnames';
import Glyf from '../glyf/glyf.component';
import GlyfContainer from '../glyfContainer/glyfContainer.component';
import { sectionGlyfs } from '../../utils/data';

import css from './SectionContainer.module.css';

const SectionContainer: FC = () => {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map((gEl, gIndex: number) => (
          <Glyf key={gIndex} glyfInfo={{ type: gEl.key }}>
            <h1 className={css.title}>{gEl.title}</h1>
            <div className={css.descriptionContainer}>
              {gEl.description.map((pEl, pIndex) => (
                <p
                  key={pIndex}
                  className={classnames({
                    [css.description]: true,
                    [css.detail]: pEl === 'подробнее',
                  })}
                >
                  {pEl}
                </p>
              ))}
            </div>
          </Glyf>
        ))}
      </div>
    </GlyfContainer>
  );
};

export default SectionContainer;
