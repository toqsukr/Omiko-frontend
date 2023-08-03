import GlyfContainer from '../GlyfContainer/GlyfContainer';
import { advantageGlyfs } from '../../utils/data';
import Glyf from '../Glyf/Glyf';
import css from './AdvantageSection.module.css';

export default function AdvantageSection() {
  return (
    <GlyfContainer style={css.advantage}>
      <div className={css.titleContainer}>
        <h1 id={css.titleText}>Преимущества</h1>
      </div>
      <div className={css.glyfContainer}>
        {advantageGlyfs.map((el, index: number) => (
          <Glyf key={index} description={el.description} />
        ))}
      </div>
    </GlyfContainer>
  );
}
