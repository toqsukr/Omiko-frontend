import css from './SectionContainer.module.css';
import Glyf from '../Glyf/Glyf';
import classnames from 'classnames';
import { sectionGlyfs } from '../../utils/data';
import GlyfContainer from '../GlyfContainer/GlyfContainer';

export default function SectionContainer() {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map((gEl, gIndex: number) => (
          <Glyf key={gIndex} type={gEl.key}>
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
}
