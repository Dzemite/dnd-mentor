export * from './store';

export type TNullable<T> = T | null;
export type TOptionable<T> = T | undefined;

// eslint-disable-next-line no-shadow
export enum RoundingModes {
  up,
  down,
}

export interface INotifyModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: { [k: string]: any };
  closeModal: () => void;
}
