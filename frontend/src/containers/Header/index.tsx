import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components';
import { setActiveModal } from 'store/modals/reducer';
import { Modals } from 'types';

import s from './Header.module.scss';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const openModal = useCallback(
    (type: Modals) => {
      dispatch(
        setActiveModal({
          activeModal: type,
          txHash: '',
          open: true,
        }),
      );
    },
    [dispatch],
  );
  return (
    <div className={s.headerWrapper}>
      <Button onClick={() => console.log('click')}>button</Button>
    </div>
  );
};
