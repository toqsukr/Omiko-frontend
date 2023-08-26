import GlyfContainer from '@components/glyfContainer/glyfContainer.component';
import { FC } from 'react';
import AdvantageGlyf from './advantageGlyf/advantageGlyf.component';
import { advantageGlyfs } from './advantageSection.data';

import css from './AdvantageSection.module.css';

const AdvantageSection: FC = () => {
  return (
    <GlyfContainer style={css.advantage}>
      <div className={css.titleContainer}>
        <h1 id={css.titleText}>Преимущества</h1>
      </div>
      <div className={css.glyfContainer}>
        {advantageGlyfs.map((el, index: number) => (
          <AdvantageGlyf key={index} description={el.description} />
        ))}
      </div>
    </GlyfContainer>
  );
};

export default AdvantageSection;
