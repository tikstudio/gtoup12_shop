import { all, fork } from 'redux-saga/effects';
import product from './product';

export default function* watchers() {
  yield all([
    fork(product),
  ]);
}
