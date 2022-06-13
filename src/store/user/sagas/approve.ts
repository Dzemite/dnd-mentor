import { toast } from 'react-toastify';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { error, request, success } from 'store/api/actions';

import { approve } from '../actions';
import actionTypes from '../actionTypes';
import userSelector from '../selectors';

export function* approveSaga({ type, payload: { amount } }: ReturnType<typeof approve>) {
  yield put(request(type));
  const myAddress = yield select(userSelector.getProp('address'));

  try {
    yield put(success(type));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    toast.error('Error in user approve saga');
    yield put(error(type));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.APPROVE, approveSaga);
}
