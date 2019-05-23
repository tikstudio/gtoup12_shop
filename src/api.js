import axios from 'axios';
import qs from 'querystringify';

const CONSUMER_KEY = 'ck_3c19be5991be88176096737429edd9612b0ac80b';
const CONSUMER_SECRET = 'cs_6e016ce51793f3b41aff2c1c729f09fb6122ec6d';

axios.defaults.baseURL = 'https://localhost/group12';

axios.interceptors.request.use((config) => {
  const s = config.url.indexOf('?') > -1 ? '&' : '?';
  // eslint-disable-next-line no-multi-assign,no-param-reassign
  config.url = config.url += `${s}consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
  return config;
}, error => Promise.reject(error));

// eslint-disable-next-line import/prefer-default-export
export function getProducts() {
  const query = qs.stringify({
    page: 1,
    per_page: 10,
  });
  return axios.get(`/wp-json/wc/v3/products?${query}`);
}
