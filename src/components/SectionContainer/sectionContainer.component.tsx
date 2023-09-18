import GlyfContainer from '@components/glyfContainer/glyfContainer.component';
import { FC } from 'react';
import { scroller } from 'react-scroll';
import { sectionGlyfs } from './sectionContainer.data';
import SectionGlyf from './sectionGlyf/sectionGlyf.component';

import { ISectionGlyfData } from '@interfaces/data.interface';
import css from './SectionContainer.module.css';
import {
  aboutScrollAnimation,
  advantageScrollAnimation,
  deliveryScrollAnimation
} from './sectionContainer.animation';

const handleDeliveryClick = () => {
  scroller.scrollTo('delivery', deliveryScrollAnimation);
};

const handleAdvantageClick = () => {
  scroller.scrollTo('advantage', advantageScrollAnimation);
};

const handleAboutClick = () => {
  scroller.scrollTo('about', aboutScrollAnimation);
};

function handleGlyfClick(el: ISectionGlyfData) {
  switch (el.key) {
    case 'delivery':
      handleDeliveryClick();
      break;
    case 'advantage':
      handleAdvantageClick();
      break;
    case 'about':
      handleAboutClick();
      break;
  }
}

const SectionContainer: FC = () => {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map(el => (
          <SectionGlyf
            key={el.key}
            title={el.title}
            description={el.description}
            onClick={() => handleGlyfClick(el)}
          />
        ))}
      </div>
    </GlyfContainer>
  );
};

export default SectionContainer;
