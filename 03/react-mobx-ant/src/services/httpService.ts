import AppConsts from './../helpers/appconst';
//import { Modal } from 'antd';
import axios from 'axios';

const qs = require('qs');
const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer: function(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  function(config) {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
      // Modal.error({
      //   title: error.response.data.error.message,
      //   content: error.response.data.error.details,
      // });
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
      // Modal.error({
      //   title: L('LoginFailed'),
      //   content: error.response.data.error.message,
      // });
    } else if (!error.response) {
      //Modal.error({ content: L('UnknownError') });
    }

    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  }
);

export default http;
