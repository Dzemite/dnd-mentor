// eslint-disable-next-line no-shadow
export enum Modals {
  init = '',
}

export interface ModalState {
  activeModal: Modals;
  open: boolean;
}

export type ModalsInitialState = {
  modalState: ModalState;
};
