import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal';
import { useShallowSelector } from 'hooks';
import { setActiveModal } from 'store/modals/reducer';
import modalsSelector from 'store/modals/selectors';
import { Modals, ModalsInitialState, State } from 'types/store';

import s from './styles.module.scss';

export const NotificationModal: FC = () => {
  const dispatch = useDispatch();
  const { modalState } = useShallowSelector<State, ModalsInitialState>(modalsSelector.getModals);

  const closeModal = useCallback(() => {
    dispatch(
      setActiveModal({
        activeModal: Modals.init,
        txHash: '',
        open: false,
      }),
    );
  }, [dispatch]);

  return (
    <div>
      <Modal visible={modalState.open} onClose={closeModal} className={s.root} />
    </div>
  );
};
