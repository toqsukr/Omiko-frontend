import css from './SectionContainer.module.css';
import Glyf from '../Glyf/Glyf';
import { sectionGlyfs } from '../../utils/data';
import GlyfContainer from '../GlyfContainer/GlyfContainer';

export default function SectionContainer() {
  return (
    <GlyfContainer style={css.section}>
      <div className={css.glyfContainer}>
        {sectionGlyfs.map((el, index: number) => (
          <Glyf
            key={index}
            type={el.key}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>
    </GlyfContainer>
  );
}
