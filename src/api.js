import axios from 'axios';
import { stringify as qs } from 'querystringify';

export const SITE_URL = 'https://tempwp.orderwebsitenow.com';

const CONSUMER_KEY = 'ck_3c19be5991be88176096737429edd9612b0ac80b';
const CONSUMER_SECRET = 'cs_6e016ce51793f3b41aff2c1c729f09fb6122ec6d';

axios.defaults.baseURL = SITE_URL;

axios.interceptors.request.use((config) => {
  const s = config.url.indexOf('?') > -1 ? '&' : '?';
  // eslint-disable-next-line no-multi-assign,no-param-reassign
  config.url = config.url += `${s}consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
  return config;
}, error => Promise.reject(error));

// eslint-disable-next-line import/prefer-default-export
export function getProducts(data) {
  const s = qs(data);
  return axios.get(`/wp-json/wc/v3/products?${s}`);
}
export function getSingleProducts(slug) {
  const s = qs({slug});
  return axios.get(`/wp-json/wc/v3/products?${s}`);
}
