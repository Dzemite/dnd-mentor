import { FC } from 'react';
import { Button } from 'components';

import s from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={s.headerWrapper}>
      <Button onClick={() => console.log('click')}>button</Button>
    </div>
  );
};
