import { FC } from 'react';

import s from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <p>
        This app is created for mentoring dnd game.
      </p>
    </div>
  );
};
export default Main;
