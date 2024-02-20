import { put, takeEvery } from 'redux-saga/effects';
import { ASYNC_ADD_CASH, ASYNC_GET_CASH, decrementAction, incrementAction } from '../store/cashReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementAction())
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementAction())
}

export function* countWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, incrementWorker);
  yield takeEvery(ASYNC_GET_CASH, decrementWorker);
}
