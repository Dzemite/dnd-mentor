import { useAppSelector } from 'hooks/redux';
import { FC } from 'react';

import s from './UserProfile.module.scss';

const UserProfile: FC = () => {

  const { user } = useAppSelector(state => state.userReducer);

  return (
    <div className={s.userProfileWrapper}>
      <h1>User profile</h1>
      <h2>User name: {user?.username}</h2>
    </div>
  );
};
export default UserProfile;
