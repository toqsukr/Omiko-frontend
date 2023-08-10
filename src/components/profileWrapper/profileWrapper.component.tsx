import Wrapper from '../wrapper/wrapper.component';
import ProfileElement from './profileElement/profileElement.component';
import { profileList } from '../../utils/data';

import css from './profileWrapper.module.css';

function ProfileWrapper() {
  return (
    <Wrapper
      windowVisualization={{ isShow: false, setShow: () => {} }}
      windowStyleID={css.profileWrapper}
    >
      <div id={css.innerWrapperContainer}>
        {profileList.map((el) => (
          <ProfileElement>{el}</ProfileElement>
        ))}
      </div>
    </Wrapper>
  );
}

export default ProfileWrapper;
