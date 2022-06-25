import { FC } from 'react';

import s from './UserProfile.module.scss';

const UserProfile: FC = () => {
  return (
    <div className={s.userProfileWrapper}>
      <h1>User profile</h1>
    </div>
  );
};
export default UserProfile;
