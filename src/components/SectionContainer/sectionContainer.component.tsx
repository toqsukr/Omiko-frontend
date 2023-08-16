import { FC } from 'react';
import SectionGlyf from './sectionGlyf/sectionGlyf.component';
import { scroller } from 'react-scroll';
import GlyfContainer from '@components/glyfContainer/glyfContainer.component';
import { sectionGlyfs } from '@utils/data';

import {
  deliveryScrollAnimation,
  advantageScrollAnimation,
  aboutScrollAnimation
} from './sectionContainer.animation';
import css from './SectionContainer.module.css';

const handleDeliveryClick = () => {
  scroller.scrollTo('delivery', deliveryScrollAnimation);
};

const handleAdvantageClick = () => {
  scroller.scrollTo('advantage', advantageScrollAnimation);
};

const handleAboutClick = () => {
  scroller.scrollTo('about', aboutScrollAnimation);
};

const SectionContainer: FC = () => {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map(el => (
          <SectionGlyf
            key={el.key}
            title={el.title}
            description={el.description}
            onClick={() => {
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
            }}
          />
        ))}
      </div>
    </GlyfContainer>
  );
};

export default SectionContainer;
