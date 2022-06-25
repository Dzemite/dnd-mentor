export * from './store';

export type TNullable<T> = T | null;
export type TOptionable<T> = T | undefined;

// eslint-disable-next-line no-shadow
export enum RoundingModes {
  up,
  down,
}
