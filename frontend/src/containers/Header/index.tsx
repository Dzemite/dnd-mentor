import { Button } from '@mui/material';
import { useAppSelector } from 'hooks/redux';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

export const Header: FC = () => {
  const { user } = useAppSelector(state => state.userReducer);
  const navigate = useNavigate();

  return (
    <div className={s.headerWrapper}>
      <h1><NavLink to='/'> DND Mentor</NavLink></h1>
      {user && <Button onClick={() => navigate('/profile')}>Profile</Button>}
    </div>
  );
};
