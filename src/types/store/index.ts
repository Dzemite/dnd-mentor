import type { Dispatch as DispatchReact } from 'react';

import { UserState } from './user';
/* PLOP_INJECT_IMPORT_STATE */
import { StakingState } from './staking';
import { LockupState } from './lockup';
import { RatesState } from './rates';

export * from './user';
export * from './ui';
/* PLOP_INJECT_IMPORT_TYPES */
export * from './staking';
export * from './lockup';
export * from './rates';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action<T, P = any, M = void> = { type: T; payload?: P; meta?: M };
export type Dispatch = DispatchReact<{ type: string }>;

export type State = {
  user: UserState;
  /* PLOP_INJECT_MODIFY_STATE */
  staking: StakingState;
  lockup: LockupState;
  rates: RatesState;
};
