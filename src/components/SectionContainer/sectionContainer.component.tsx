import { FC } from 'react';
import SectionGlyf from './sectionGlyf/sectionGlyf.component';
import { scroller } from 'react-scroll';
import GlyfContainer from '../glyfContainer/glyfContainer.component';
import { sectionGlyfs } from '../../utils/data';

import css from './SectionContainer.module.css';

const handleDeliveryClick = () => {
  scroller.scrollTo('delivery', {
    offset: -80,
    duration: 1200,
    smooth: 'easeInOutQuart',
  });
};

const handleAdvantageClick = () => {
  scroller.scrollTo('advantage', {
    offset: -70,
    duration: 1200,
    smooth: 'easeInOutQuart',
  });
};

const handleAboutClick = () => {
  scroller.scrollTo('about', {
    offset: -25,
    duration: 1200,
    smooth: 'easeInOutQuart',
  });
};

const SectionContainer: FC = () => {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map((el) => (
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
