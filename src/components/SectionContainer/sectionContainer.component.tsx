import { FC } from 'react';
import classnames from 'classnames';
import Glyf from '../glyf/glyf.component';
import GlyfContainer from '../glyfContainer/glyfContainer.component';
import { sectionGlyfs } from '../../utils/data';

import css from './SectionContainer.module.css';

// function handleClick(type: string | undefined) {
//   switch (type) {
//     case GlyfType.ADVANTAGE:
//       scroller.scrollTo(GlyfType.ADVANTAGE, {
//         offset: -70,
//         duration: 1200,
//         smooth: 'easeInOutQuart',
//       });
//       break;
//     case GlyfType.DELIVERY:
//       scroller.scrollTo(GlyfType.DELIVERY, {
//         offset: -80,
//         duration: 1200,
//         smooth: 'easeInOutQuart',
//       });
//       break;
//     case GlyfType.ABOUT:
//       scroller.scrollTo(GlyfType.ABOUT, {
//         offset: -25,
//         duration: 1200,
//         smooth: 'easeInOutQuart',
//       });
//       break;
//   }
// }

const SectionContainer: FC = () => {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map((gEl, gIndex: number) => (
          <Glyf key={gIndex}>
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
