import Wrapper from '../wrapper/wrapper.component';

import css from './profileWrapper.module.css';

function ProfileWrapper() {
  return (
    <Wrapper
      windowVisualization={{ isShow: false, setShow: () => {} }}
      windowStyleID={css.profileWrapper}
    >
      <div>
        <p>профиль</p>
      </div>
    </Wrapper>
  );
}

export default ProfileWrapper;
