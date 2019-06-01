import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS, FETCH_SINGLE_FAIL,
  FETCH_SINGLE_PRODUCT, FETCH_SINGLE_SUCCESS
} from '../actions/product';

function* handleProductsFetch(action) {
  try {
    const { data } = yield call(api.getProducts, action.payload.data);
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: FETCH_PRODUCTS_FAIL,
      message: e.message,
    });
  }
}

function* handleSingleProductFetch(action) {
  try {
    const { data } = yield call(api.getSingleProduct, action.payload.slug);
    yield put({
      type: FETCH_SINGLE_SUCCESS,
      payload: { data: data[0] },
    });
  } catch (e) {
    yield put({
      type: FETCH_SINGLE_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, handleProductsFetch);
  yield takeLatest(FETCH_SINGLE_PRODUCT, handleSingleProductFetch);
}
